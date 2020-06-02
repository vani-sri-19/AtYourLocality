let express = require('express') // importing express module
let router = express.Router(); // creating router for the express app
let user = require('../server/models/user') // importing users model from user.js
console.log("in auth.js");
//router has many funtions like get, post, put, delete using that. 
//We can specify which CRUD operation we are about to do
//here http://localhost:(port)/login is the url used to access the below route
router.post("/login",(req,res) => {
    // (model) has findone and find methods to fetch data. 
    //We will give the query as a javascript object inside it.
    user.findOne({username: req.body.name}) // here findone method will return one object(row) from the model(table) as per the query given
    .then(person => {
        if(!person){ // checking whether there is any data in person
            res.json({message : "User Not Found"}) // res.json will return a data specified in json format to the user
        }
        else if(person.password === req.body.password){  // checking password
            res.json({message : "Logged IN"})
        }
        else{
            res.json({message : "password Incorrect"})
        }
        console.log("in login");
    })
    .catch(err => {
        res.json({
            message : err.message
        })
    })
})

//here http://localhost:(port)/register is the url used to access the below route
router.post("/register",(req,res) => {
    console.log("register tab");
    let person = new user({ // creating a new object(row) for the user model with the data we passed
        username : req.body.name,
        password : req.body.password
    });
    person.save()   // saving(inserting) the object(row) in the model(table)
    .then(result => {   // result will return a success sign like the data passed to save will be returned 
        // investigate by yourself about what is returned while saving(inserting) a object(row)
        res.json({
            message : "Successful"
        })
        console.log("inside then");

    })
    .catch(err => {
        res.json(
            {
                message : err.message
            }
        )
        console.log("inside catch"+err.message);
    });
})

console.log("out of auth");
module.exports = router //exporting router module