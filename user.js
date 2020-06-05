const mongoose = require('mongoose') // importing mongoose module
var jwt = require('jsonwebtoken');
console.log("in user.js");
//Creating a userschema using mongose.schema function
const userschema = mongoose.Schema({
    //type - datatype ;  required - not null ; dropDups - allows only unique data
    username : {type : String , required: true, unique: true, dropDups: true},
    password : {type : String, required : true},
    place : {type : String, required : true},
    category : {type : String, required : true}
})
console.log("schema created");
// mongoose.model fuction registers the schema
userschema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      //email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };
module.exports = mongoose.model('Users', userschema) // exporting the model
console.log("out of user");