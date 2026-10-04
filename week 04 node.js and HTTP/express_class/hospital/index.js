const express = require('express');
const app = express();

const user = [{
    name: "Aryan",
    kidneys: [{
        healthy: false,
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    // write logic
    const aryanKidneyHealth = user[0].kidneys;
    console.log(aryanKidneyHealth);
    const numberofkidenys = aryanKidneyHealth.length;
    let numberofhealthyKidneys = 0;
    for(let i = 0; i< aryanKidneyHealth.length; i++){
        if(aryanKidneyHealth[i].healthy){
            numberofhealthyKidneys++;
        }
    }
    const numberofunhealthyKidneys = numberofkidenys - numberofhealthyKidneys;
    res.json({
        totalKidneys: numberofkidenys,
        healthyKidneys: numberofhealthyKidneys,
        unhealthyKidneys: numberofunhealthyKidneys
    });
});

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({healthy: isHealthy});
    res.json({
        msg: "Kidney added successfully"
    });
});

app.put("/", function(req,res){
    for(let i =0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "All kidneys are now healthy"
    });
});


app.delete("/",function(req,res){
    function checkUnhealthyKidneys(){
        for(let i =0; i<user[0].kidneys.length; i++){
            if(!user[0].kidneys[i].healthy){
                return true;
            }
        }
        return false;
    }
    
    if(checkUnhealthyKidneys()){
        res.status(411).json({
            msg: "You have unhealthy kidneys"
        });
    } else {
        const newkidneys = [];
        for(let i =0; i<user[0].kidneys.length; i++){
            if(user[0].kidneys[i].healthy){
                newkidneys.push(user[0].kidneys[i]);
            }
        }
        user[0].kidneys = newkidneys;
        res.json({
            msg: "Unhealthy kidneys removed"
        });
    }
});


app.listen(3000);