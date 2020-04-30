# node-express-mongodb-server
Express is a really cool Node framework that’s designed to help JavaScript developers create servers really quickly. NodeJS may be server side, but it can do a whole lot more than just serve pages and data. NodeJS is a powerful platform.


## Installation
To confirm installation, close any open your terminal instance that may be running and start a new instance. Type the following two commands to display the version of Node installed and NPM. NPM is the Node Package Manager and is a tool for installing, uninstalling and maintaining package modules for your app. [Nodejs](https://www.nodejs.org)

```
$ npm -v
$ node -v
```
## Initialize a new app

First a basic Node app contains a <b>.js</b> file and a package.json file. The <b>package.json</b> file contains a couple of properties. First one is name which holds the name of the app, second is version which shows the version of your app, a description of your app, main that points to the entry point of your application. There’s also scripts, that can be run when you need to perform some repetitive tasks, author name, <b>licence</b>, <b>dependencies</b> and <b>devDependencies.</b>

Second way you can initialize an app is using the <b>npm</b> tool. It’s the simplest but not the fastest way. All you have to do is open up your terminal in the folder you want to create your app in and type <b>npm init</b> to interactively create your <b>package.json</b> file.

Third way is the simplest, but a little complex for beginners as it creates files that you will be unfamiliar with especially if you’ve never done NodeJS. It also required you to install the express tool to generate a complete express template and not just the package.json.

```
$ npm install -g express-generator
```

## Installing Express
Use the second method to generate a package.json file almost similar to the one pictured above. Second thing we want to do is install Express into our app. Note, we aren’t going to install express globally as we need to use it in this specific folder/app. Use the command below to install Express.

```
$ npm install express --save
```
# Creating the app
Then create the app.js file or whatever you prefer naming it (default is index.js) and add in the following code

```javascript
const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server running on port 3000"));
```
Congrats! You just made your first useless express server! I guess you are ready for the next ^_^
