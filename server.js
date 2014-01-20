
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Todo = require('./schema.js');
mongoose.connect('mongodb://localhost/mydb');
app.use(express.static(__dirname + '/app'));
app.use(express.bodyParser());

app.post('/todos/post', function(req, res) {
  var todo = req.body;
  var newtodo = new Todo();
  newtodo.name = todo.todo;
  newtodo.dueDay = todo.date;
  newtodo.save(function(error) {
    if(error) {
      console.log('error', error);
      res.send(400);
    }
  });
  Todo.find({}, {name: true, dueDay: true}, function(error, todos) {
    if(error) {
      console.log('Error', error);
      res.send(400);
    }
    if(todos) {
      console.log('got todos');
      res.json(todos);
    }
  });
});

app.get('/todos/get', function(req, res) {
  Todo.find({}, {name: true, dueDay: true}, function(error, todos) {
    if(error) {
      console.log('Error', error);
      res.send(400);
    }
    if(todos) {
      console.log('got todos');
      res.json(todos);
    }
  });
});


app.get('*', function(req, res) {
  res.sendfile('app/index.html');
});


app.listen(3000);
console.log('port is listening 3k');

