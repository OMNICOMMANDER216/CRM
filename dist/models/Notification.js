'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var NotificationSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  cu: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  }
}, { timestamps: true });

// Create Collection and add Schema
mongoose.model('Notification', NotificationSchema);