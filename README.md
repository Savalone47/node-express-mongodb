# Simple Node with Express + MongoDB Server

An easy way to get started with a Express server with MongoDB with Node.js

## Features

* Babel 7
* Environment Variables
* Express
* REST API
* MongoDB

## Requirements

* [node & npm](https://nodejs.org/en/)

## Installation

* `git clone https://github.com/savalone47/node-express-mongodb-server.git`
* `cd node-express-mongodb-server`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*

### GET Routes

* visit [localhost:3000](http://localhost:3000):
  * /messages
  * /messages/1
  * /users
  * /users/1

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: [localhost:3000/messages](http://localhost:3000/messages)
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi the World" }`
* Delete a message with:
  * URL: [localhost:3000/messages/1](http://localhost:3000/messages/1)
  * Method: DELETE