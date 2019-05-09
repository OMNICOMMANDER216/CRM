'use strict';

/* eslint-disable no-underscore-dangle */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Task = mongoose.model('Task');

var defaultGroup = require('./default_groups');

var GroupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
    Default: '#662c90'
  },
  deleted: {
    type: Boolean,
    Default: false
  },
  archived: {
    type: Boolean,
    Default: false
  },
  position: {
    type: Number,
    Default: false
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, { timestamps: true });

GroupSchema.statics.createInitialGroups = function createInitialGroups(callback) {
  this.model('Group').collection.insert(defaultGroup, null, callback);
};

GroupSchema.statics.addTask = function addTask(task, callback) {
  this.model('Group').findByIdAndUpdate(task.group, { $addToSet: { tasks: task._id } }, callback);
};

GroupSchema.pre('deleteMany', function preRemove(next) {
  // 'this' is the client being removed. Provide callbacks here if you want
  // to be notified of the calls' result.
  // console.log(this);
  Task.deleteMany({ _id: { $in: this.tasks } }).exec();
  next();
});

// Create Collection and add Schema
mongoose.model('Group', GroupSchema);