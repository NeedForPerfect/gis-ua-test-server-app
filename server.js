// in sublime
var express = require("express");
//var port = process.env.PORT || 3000;
var app = express();

app.get("/", (req, res) => {
 res.send(JSON.stringify('Hello World'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});