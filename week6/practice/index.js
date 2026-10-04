const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secretkey";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username == username)) {
        res.json({
            message: "you are already signed up"
        })
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed up"
    })
})


app.post("/signin" ,function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        return u.username === username && u.password === password;
    });


    if(!user){
        res.json({
            message: "you are not signed up"
        })
    }
    if(user) {
        const token = jwt.sign({
            username : user.username
        } , JWT_SECRET)

        res.json({
            message: "you are signed in",
            token : token
        })
    }


})

app.get("/me" , function(req,res){
    const token = req.headers.token;

    const decoded = jwt.verify(token , JWT_SECRET);

    const username = decoded.username;

    let founduser = null;

    for(let user of users){
        if(user.username === username){
            founduser = user;
            break;
        }
    }

    if(!founduser){
        res.status(403).json({
            message: "user not found"
        })
        return
    }
    res.json({
        username: founduser.username
    })
})

app.listen(3000, function() {
    console.log("server is running on port 3000")
})