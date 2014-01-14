var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');
var express = require('express');
var app = express();
var db = mongoose.connect('mongodb://localhost/calendar');
app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
  res.sendfile('app/index.html');
})


app.listen(3000);
console.log('port is listening 3k');

