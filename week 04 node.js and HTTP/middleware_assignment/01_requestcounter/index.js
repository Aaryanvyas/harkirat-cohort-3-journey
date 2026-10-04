const express = require('express');

const app = express();
let requestcount = 0;


app.use(function(req, res, next){
    requestcount += 1;
    next();

})

app.get("/user",function(req,res){
    res.status(200).json({name: "aryan"})
})

app.post("/user",function(req,res){
    res.status(200).json({message: " created dummy user successfully"})
})

app.get("/requestcount",function(req,res){
    res.status(200).json({requestcount: requestcount})
})


app.listen(3000);