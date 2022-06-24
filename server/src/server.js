const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/matter', (req, res) => {
    res.send("Hello Word")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on ', {PORT}))