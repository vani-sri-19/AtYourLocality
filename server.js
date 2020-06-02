//import * from 'http'
let http = require('http'); // importing http module
let mongoose = require('mongoose') //importing mongoose module
let app = require('./app'); //importing app module from app.js
console.log("in server.js");
//Connecting to database 
//database name can be changed to anything
//you don't have to create database manually in command promt or compass. 
//database will be auto created during the first data insersion in a schema
mongoose.connect("mongodb://localhost:27017/dummy?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false&useNewUrlParser=true")
    .then( (data) => {  //.then function is a promise function which will be executed after the specific operation
        console.log("Connection was successfull")
    }
    )
    .catch(() => { //.catch is same as .then but .catch is called when the operation throws any error
        console.log("not connected")
    })
    
app.set("port",3000); // setting a port for the express part
let server = http.createServer(app);   // creating a nodejs server for express 

server.listen(3000); // setting a port fot the server(nodejs server)
console.log("at end of server");