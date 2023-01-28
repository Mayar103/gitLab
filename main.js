const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/mai', function (req, res) {
  res.send('Mai Request')
})

app.listen(3000)