## Overview
This repository contains the code for a REST API built using Nodejs, Express, Mongodb. The API is designed to allow its users to register, login with username annd password and also change thier. The code is well-written and easy to understand, so even if you're not an expert in programming, you should be able to navigate it without any problems.

## TechStack
Node.js: Node.js is a cross-platform, open-source server environment that runs JavaScript outside the browser.

Express: Express.js is a popular open-source Node.js framework for building web applications and APIs.

Mongodb: MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.


## Features

- The registeration, login and change password operations  for users
- Proper Error checking
- Input Validation
- Database connection implementation.
- Usage
- Base URL
- The base URL for all API requests is: http://localhost:8000/api/


## USER REGISTRATION

##### Create USER
   Endpoint: /api/register
   Method: POST
   Description: Creates a new user.
   Request:
   Request Body: JSON object with user properties (e.g. username , password).
   Response:
   Status Code: 200 Created (if the user is created successfully)
   Status Code: 400 Bad Request (if the request data is invalid)
   Response Body: A success message.

   Example Request:

```javascript
POST http://localhost:8080/api/register
```
PayLoad

```javascript
{
    {
    "username":"king ese",
    "password":"dannnnnn" 
}
}
```

Example Response:

```javascript
{
    "statusCode": 200,
    "message": "User creaed succesfully",
    "data": [
        {
            "id": "651e7db9cb9e0c76197bb5a5",
            "username": "king ese",
            "password": "$2a$10$X2.Gbn/bgZ4Yrc4OVirV8eD4R3JkINU5xxWx35R4ndcEAs6qdMiBi",
        }
    ]
}
```


## USER LOGIN

##### Login user
   Endpoint: /api/login
   Method: POST
   Description: Login a new user.
   Request:
   Request Body: JSON object with user properties (e.g. username , password).
   Response:
   Status Code: 200 Created (if the user is login successfully)
   Status Code: 400 Bad Request (if the request data is invalid)
   Response Body: A success message.

   Example Request:

```javascript
POST http://localhost:8080/api/login
```
PayLoad

```javascript
{
    {
    "username":"king ese",
    "password":"dannnnnn" 
    }
}
```

Example Response:

```javascript
    {
    "status": "ok",
     "message": "User login succesfully",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWU4MzM4Y2I5ZTBjNzYxOTdiYjVhNyIsInVzZXJuYW1lIjoia2luZyBFc2UiLCJpYXQiOjE2OTY0OTkwODB9.7PfeSk8p_RPKmnk8Io8lioIrXPIsPTdxLeUp0xMVaT4"
    }

```


## CHANGE USER PASSWORD

   Endpoint: /api/change-password
   Method: POST
   Description: change user password.
   Request:
   Request Body: JSON object with user properties ( password).
   Response:
   Status Code: 200 Created (if the user password is changed successfully)
   Status Code: 400 Bad Request (if the request data is invalid)
   Response Body: A success message.

   Example Request:

```javascript
POST http://localhost:8080/api/change-password
```
PayLoad

```javascript
{
newpassword: "Daddyese"
}
```

Example Response:

```javascript
    {
    "status": "ok",
     "message": "User login succesfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWU4MzM4Y2I5ZTBjNzYxOTdiYjVhNyIsInVzZXJuYW1lIjoia2luZyBFc2UiLCJpYXQiOjE2OTY0OTkwODB9.7PfeSk8p_RPKmnk8Io8lioIrXPIsPTdxLeUp0xMVaT4"
    }

```

## Errors Status

This API uses the following error codes:

- 400 Bad Request: The request was malformed or missing required parameters.

## Success Status

This API uses the following success codes:

- 200 success Respond: The respond was successful.



