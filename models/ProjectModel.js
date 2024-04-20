const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
name: { type: String, required: true },
owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
staff: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
client: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
},
{ timestamps: true}
);


module.exports = mongoose.model('Project', projectSchema);
  