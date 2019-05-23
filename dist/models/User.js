'use strict';

/* eslint-disable func-names */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema = new Schema({
  googleID: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  },
  role: {
    type: String,
    enum: ['Employee', 'Bookkeeping', 'Sales', 'Pm', 'DevAdmin', 'Developer', 'Compliance', 'QA', 'Admin'],
    default: 'Employee'
  },
  customers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notification'
  }]
}, { timestamps: true });

UserSchema.statics.addCustomer = function (userId, customerId, notificationId) {
  this.model('User').findByIdAndUpdate(userId, { $addToSet: { customers: customerId, notifications: notificationId } }, function (error, model) {
    if (error) {
      throw error;
    }
  });
};

UserSchema.statics.removeCustomer = function (userId, customerId) {
  this.model('User').findByIdAndUpdate(userId, { $pull: { customers: customerId } }, function (error, model) {
    if (error) {
      throw error;
    }
  });
};

UserSchema.statics.addNotifications = function addNotifications(query, notification) {
  var bulk = this.model('User').collection.initializeOrderedBulkOp();
  bulk.find(query).update({ $addToSet: { notifications: notification._id } });
  bulk.execute(function (err) {
    if (err) throw err;
  });
};

UserSchema.methods.setRole = function (role) {
  undefined.role = role;
};

// Create Collection and add Schema
mongoose.model('User', UserSchema);