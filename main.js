const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Mayar', function (req, res) {
    res.send('Mayar Request')
  })
  

app.listen(3000)