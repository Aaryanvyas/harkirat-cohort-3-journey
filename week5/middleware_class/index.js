const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//commonly used middleware 
//1.express.json
//used to parse the body of the incoming request and also 
let requestCount = 0;

app.use(express.json)

function requestIncreasor(req,res,next){
    requestCount = requestCount + 1;
    console.log("total number of request- " + requestCount);
    next();
}

app.get("/sum",  requestIncreasor , function (req, res) {
    
    
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  

  res.json({
    ans: a + b,
  });
});


app.post("/miltiply", function (req, res) {

    

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  
  res.json({
    ans: a * b,
  });
});

app.listen(3000);
