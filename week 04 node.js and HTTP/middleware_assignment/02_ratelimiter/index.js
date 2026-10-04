const express = require("express");

const app = express();

// you have been given an express server which has a few endpoints
// your task is to create a global middleware (app,use ) which willl
// rate limit the requests from a user to only 5 rrequest per second
// if a user sends more than 5 request s in a single second
// the server should block them with a 404
// user will be sendint in their user id in the header 'user-id'
// you have been given a numberoOfRequests object which will keep track of the number of requests made by each user in a second



let NumberOfRequestsForUser = {};
setInterval(() => {
    NumberOfRequestsForUser = {};
}, 1000);


app.use((req, res, next) => { 
    const userId = req.headers['user-id'];
    if(NumberOfRequestsForUser[userId]) {
        NumberOfRequestsForUser[userId] = NumberOfRequestsForUser[userId] + 1;
        if(NumberOfRequestsForUser[userId] > 5) {
            return res.status(404).send('Too many requests');
        }
        else{
            next();
        }
    } else {
        NumberOfRequestsForUser[userId] = 1;
        next();
    }
});

app.get("/", (req, res) => {
    res.send("Request successful");
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});


