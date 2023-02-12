const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Please enter a task'],
    unique: true,
  },
});

const Taskdb = mongoose.model('taskdb', taskSchema);
module.exports = Taskdb;
