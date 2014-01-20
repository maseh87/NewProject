var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  dueDay: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);

