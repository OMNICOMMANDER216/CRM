"use strict";

/* eslint-disable func-names */
var mongoose = require("mongoose");

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
    enum: ["Bookkeeping", "Sales", "Pm", "DevAdmin", "Developer", "Compliance", "Admin"]
  },
  customers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notification"
  }]
}, { timestamps: true });

UserSchema.statics.addCustomer = function (user_id, customer_id, notification_id) {
  this.model("User").findByIdAndUpdate(user_id, { $addToSet: { customers: customer_id, notifications: notification_id } }, function (error, model) {
    if (error) {
      console.log(error);
    }
  });
};

UserSchema.statics.removeCustomer = function (user_id, customer_id) {
  this.model("User").findByIdAndUpdate(user_id, { $pull: { customers: customer_id } }, function (error, model) {
    if (error) {
      console.log(error);
    }
  });
};

UserSchema.statics.add_notifications = function add_notifications(query, notification) {
  var bulk = this.model("User").collection.initializeOrderedBulkOp();
  bulk.find(query).update({ $addToSet: { notifications: notification._id } });
  bulk.execute(function (err) {
    return err && console.log(err);
  });
};

UserSchema.methods.setRole = function (role) {
  return undefined.role = role;
};

// Create Collection and add Schema
mongoose.model("User", UserSchema);