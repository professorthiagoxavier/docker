var express = require('express');
const mysql = require('mysql');
var app = express();



app.get('/', function (req, res) {
  res.send('<h3> Uninove</h3>');
});



app.listen(process.env.PORT || 8089);
