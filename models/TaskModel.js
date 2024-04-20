const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
name: { type: String, required: true },
createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
assignedTo: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
description: {type: String},
files: [{
    name: {type: String},
    url: {type: String}
}],
},
{ timestamps: true}
);
  
module.exports = mongoose.model('Task', taskSchema);
  