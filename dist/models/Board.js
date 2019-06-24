'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var BoardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  description: {
    type: String
  },
  folder: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
    required: true
  },
  columns: [{
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['name', 'user', 'status', 'priority', 'invoice', 'last_updated', 'date', 'text'],
      required: true
    }
  }],
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }],
  groupsOrder: [{
    type: String
  }]
}, { timestamps: true });

BoardSchema.statics.addGroup = function addGroup(boardId, groupId, callback) {
  this.model('Board').findByIdAndUpdate(boardId, { $addToSet: { groups: groupId } }, { new: true }, callback);
};

BoardSchema.statics.removeGroup = function removeGroup(boardId, groupId, callback) {
  this.model('Board').findByIdAndUpdate(boardId, { $pull: { groups: groupId } }, { new: true }, callback);
};

// Create Collection and add Schema
mongoose.model('Board', BoardSchema);