var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    channel: {
      id: String
    },
    taskid: Number,
    user: {
      id: String
    },
    task: String,
    responsible: {
      id: String
    },
    deadline: Date,
    status: String
});

module.exports = mongoose.model('Task', TaskSchema);
