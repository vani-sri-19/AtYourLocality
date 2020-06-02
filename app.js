let express = require('express'); // importing express module
let router = require('./auth') // importing router module from auth.js
const bodyParser = require("body-parser"); // importing bodyparser module
let cors = require("cors")
console.log("in app.js");
let app = express(); // creating a express app
app.use(bodyParser.json()); // parsing the json data and mapping it to an object
app.use(bodyParser.urlencoded({ extended: false })); // next class
//app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    console.log("completed cors");
    next();
  });
  app.use(cors())
/*
 // var express = require('express')
var cors = require('cors')
//var app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})*/
  
app.use((req,res,next) => {
    console.log("hi i am console")
    next();
})  // sample for "next" concept - this part will be executed and passes the control to the next use() part

app.use('/api',router); // router module is registered with express app

module.exports = app;    //exporting express app
console.log("out of app");