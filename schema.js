var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  dueDay: String
});

module.exports = mongoose.model('Todo', TodoSchema);

