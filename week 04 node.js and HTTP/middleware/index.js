const express = require("express");

const app = express();


// function that returns a boolean if the age is more than 14

// function isAgeMoreThan14(age) {
//     if(age > 14) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//using middlewares for creating the same function
function isAgeMoreThanMiddleware(req, res, next){
    const age = req.query.age;
    if(age > 14){
        next();
    } else {
        res.status(411).json({
            message: "you are not allowed to ride the ride"
        })
    }



}

app.get("/ride1", isAgeMoreThanMiddleware, function (req, res) {
        res.json({

            message: "you have successfully ridden the ride 1"
        });
    });


app.get("/ride2", isAgeMoreThanMiddleware, function(req,res){
   
        res.json({
            message: "you have successfully ridden the ride 2"
        });
});

app.listen(3000);
 
