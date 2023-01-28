const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/menna", function (req, res) {
  res.send("hi menna");
});

app.listen(3000);
