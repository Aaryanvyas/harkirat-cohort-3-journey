const express = require("express");

const app = express();


app.get("/sum", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        sum: a + b
    });
});

app.get("/subtract/:a/:b", function (req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        subtract: a - b
    });
});
app.get("/multiply", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        multiply: a * b
    });
});

app.get("/divide", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        divide: b === 0 ? "Cannot divide by zero" : a / b
    });
});


app.listen(3000);