var express = require("express");
var app = express();
require("dotenv/config");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.all("*", function(req, res, next) {
  var origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
  next();
});

app.use(bodyParser.json());

//routes
suppliersRoutes = require("./routes/suppliers");
app.use("/suppliers", suppliersRoutes);
const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
  });
};

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    start();
  }
);
