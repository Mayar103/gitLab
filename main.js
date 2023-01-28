const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/menna", function (req, res) {
  res.send("menna Request");
});

app.listen(3000);
