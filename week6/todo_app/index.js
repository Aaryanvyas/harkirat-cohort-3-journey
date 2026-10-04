const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecretkey";

const app = express();

app.use(express.json());
app.use(express.static("./public"));

const users = [];


app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function (u) {
        return u.username === username;
    })

    if (user) {
        return res.json({
            message:
                "you are already signed up"
        })
    }

    users.push({
        username: username,
        password: password,
        todos: []
    });

    res.json({ message: "user created" })

})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function (u) {
        return u.username === username && u.password === password;
    })

    if (!user) {
        res.json({
            message: "user not found"
        })
        return;
    }
    const token = jwt.sign({
        username: user.username
    }, JWT_SECRET)

    res.json({
        token: token
    })
})
// middleware to verify the jwt we will use this middleware in the upcoming requests

function authMiddleware(req, res, next) {

    const token = req.headers.token;
    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = users.find(function (u) {
            return u.username === decoded.username;
        })

        if (!user) {
            return res.status(403).json({
                message: "invalid jwt"
            })
        }

        req.user = user;
        next();

    } catch (e) {
        return res.status(403).json({
            message: "invalid jwt"
        })
    }
}

//retrieve todos
app.get("/todos", authMiddleware, function (req, res) {

    const todos = req.user.todos;

    res.json({
        todos: todos
    })

})
//create todos
app.post("/todos", authMiddleware, function (req, res) {
    const title = req.body.title;
    const description = req.body.description;

    req.user.todos.push({
        title: title,
        description: description,
        id: Date.now(),
        isCompleted: false
    })

    res.json({
        message: "todo created"
    })
})
//update the todos
app.put("/todos/:id", authMiddleware, function (req, res) {
    const id = Number(req.params.id);
    const isCompleted = req.body.isCompleted;

    const todo = req.user.todos.find(function (todo) {
        return todo.id === id;
    })
    if (todo) {
        todo.isCompleted = isCompleted;

        res.json({
            message: "todo updated"
        })
    }
    else {
        res.status(404).json({
            message: "todo not found"
        })
    }
})

//delete todos

app.delete("/todos/:id", authMiddleware, function (req, res) {

    const id = Number(req.params.id);

    const todo = req.user.todos.find(function (todo) {
        return todo.id === id;
    })

    if (todo) {
        req.user.todos.splice(req.user.todos.indexOf(todo), 1);

        res.json({
            message: "todo deleted"
        })
    }
    else {
        res.status(404).json({
            message: "todo not found"
        })
    }
})

//mark as done 

app.put("/todos/:id/done", authMiddleware, function (req, res) {

    const id = Number(req.params.id);

    const todo = req.user.todos.find(function (todo) {
        return todo.id === id;
    });

    if (!todo) {
        return res.status(404).json({
            message: "todo not found"
        });
    }

    todo.isCompleted = true;

    res.json({
        message: "todo marked as done"
    });
});












console.log("MY TODO APP SERVER");

app.listen(3000);