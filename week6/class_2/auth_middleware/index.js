const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const JWT_SECRET = 'mysecretkey';

const app = express();

app.use(express.json());

const users = [];

function logger(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({ username, password });
    next();
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username === username)) {
        res.json({
            message: "you are already signed in"
        });
        return;
    }

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "you are signed in"
    });
});

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
            token: token
        });

        console.log(users);
    } else {
        res.status(403).json({
            message: "invalid username and password"
        });
    }
});

//creating an auth middleware
function auth_Middleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "you are not logged in"
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            req.username = decodedData.username;
            return next();
        }

        return res.status(401).json({
            message: "you are not logged in"
        });
    } catch (error) {
        return res.status(401).json({
            message: "you are not logged in"
        });
    }
}

app.get("/me", auth_Middleware, function(req, res) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

app.listen(3000);
