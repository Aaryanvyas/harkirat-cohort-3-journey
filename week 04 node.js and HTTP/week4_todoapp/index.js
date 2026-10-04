const express = require('express');
const app = express();



// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/data', (req, res) => {
    // Handle POST request data here
    res.send('Data received');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(3000);    