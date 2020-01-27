var express = require("express");
var app = express();
require('dotenv/config');
const mongoose = require('mongoose');

app.all('*', function(req, res, next) {
    var origin = req.get('origin'); 
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB');
});


app.get("/", (req, res) => {
 res.send(JSON.stringify('Hello World'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});