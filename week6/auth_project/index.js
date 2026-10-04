    const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mysecretkey';

const app = express();

app.use(express.json());

const users = [];



app.post("/signup" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)) {
        res.json({
            message: "you are already signed in"
        })
        return
    }


    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed in"
    })
})

app.post("/signin", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        return u.username === username && u.password === password;
    });

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

      

        res.json({
            message: token
        });

        console.log(users);

    } else {
        res.status(403).json({
            message: "invalid username and password"
        });
    }
});


app.get("/me", function(req, res) {

    const token = req.headers.token; // JWT

    const decodedInformation = jwt.verify(token, JWT_SECRET);

    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {

        if (users[i].username === username) {
            foundUser = users[i];
        }

    }

    if (foundUser) {

        res.json({
            username: foundUser.username,
            password: foundUser.password
        });

    } else {

        res.json({
            message: "token invalid"
        });

    }

});

app.listen(3000); // ensures that the server is listeneing to the port at 3000
//there is a problem in stateful tokens as we have to always hit the database for every end point to check if the token is valid or not.f
//jwt is a stateless token which means we dont have to hit the database for every end point to check if the token  is valid or not. we can just verify the token and get the user information from the token i 