const express = require("express");

const app = express();

let errorcount = 0;

// you have been given an express server which has a few endpoints 
// your tasks is to
// 1. ensure that if there is ever an exception, the end user sees a status code of 404
// 2. maintain the errorcount varibel whose value shouod go up everytime thhere is an expception in any endpoint


app.get('/user' , function(req,res){
    throw new Error("user not found");
    res.status(200).json({name : "aryan vyas"});
})

app.post("/user",function(req,res){
    res.status(200).json({message : "user created"});

})

app.get("/errorcount",function(req,res){
    res.status(200).json({errorcount : errorcount});
})


// error middleware 
// defined at the end of the file

app.use(function(err,req,res,next){
    errorcount++;
    res.status(404).json({error : err.message});
})

app.listen(3000);
