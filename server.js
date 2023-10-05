const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const User = require('./model/user')
const jwt = require('jsonwebtoken')

const   JWT_SECRET = 'shsgebxggssydbjx@#ghsgd'

// connection to mongodb database
mongoose.connect('mongodb://0.0.0.0:27017/Register', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to db')).catch((err) => console.log(err))

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())


// post api
app.post('/api/register', async (req, res) =>{
    
      // in password and username
    const { username, password: plainTextPassword } = req.body

            //validation and warning
        if (!username || typeof username !== 'string' ) {
           return res.json({status: 'error', error:'Invalid username'}) 
        }

        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({status:'error', error:'Invalid password'})
        }
  
        if (plainTextPassword.length < 6) {
            return res.json({status:'error',
             error:'password is too small. Should be at least 6 character'})
        }
        
        const password = await bcryptjs.hash(plainTextPassword, 10)

        // perform the api
    try {
      const response =  await User.create({
            username,
            password
        })

        // check for error
        console.log('User creaed succesfully',response)
    } catch (error) {
        if (error.conde === 11000) {
            return res.json({status: error, message:'username with email in our database'})
        }
        throw error
    }

    // confirm if the creation is successful
  res.json({status: 'ok'})
})



// login api
app.post('/api/login', async (req,res) =>{

        const { username, password} = req.body
        
        const user = await User.findOne({username}).lean()

        if(!user){
            return res.json({status:'error', error: 'Invalid username/ password'})
        }

        if( await bcryptjs.compare(password, user.password)){
            //username/ password cobination is succesfull

            const token = jwt.sign( {
                id: user._id,
                username: user.username
            },
            JWT_SECRET
            )

            return res.json({status:'ok', data: token }) 
        }

        res.json({status:'error', error: 'Invalid username/ password'})
})


// api to change a passowrd
app.post('/api/change-password', async (req, res) =>{
    const { token, newpassword: plainTextPassword} = req.body
    try {
        const user = jwt.verify(token, JWT_SECRET)

        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({status:'error', error:'Invalid password'})
        }
  
        if (plainTextPassword.length < 6) {
            return res.json({status:'error',
             error:'password is too small. Should be at least 6 character'})
        }

      const _id = user.id
      const password = await bcryptjs.hash(plainTextPassword, 10)
      await User.updateOne(
        {_id},
        {
            $set: { password }
        }
        )
        res.json({status: 'ok'})
    } catch (error) {
       res.json({status:'error', error:';))'}) 
    }
  
  //console.log('JWT decoded',user)
    
})


// server running here
app.listen(8000, () => {
    console.log('Server up at 8000')
})