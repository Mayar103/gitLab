const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/menna", function (req, res) {
  res.send("menna Request");
});

app.post("/menna", function (req, res) {
  res.send("menna Request2");
});

app.get("/Mayar", function (req, res) {
  res.send("Mayar Request");
});

app.post("/Mayar", function (req, res) {
  res.send("Mayar Request2");
});

app.get("/mai", function (req, res) {
  res.send("Mai Request");
});

app.post("/mai", function (req, res) {
  res.send("Mai is created");
});

app.listen(3000);
