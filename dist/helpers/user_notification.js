"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = require('mongoose').model("User");

function add_notifications(query, notification) {
  var bulk = User.collection.initializeOrderedBulkOp();
  bulk.find(query).update({ $addToSet: { notifications: notification._id } });
  bulk.execute(function (err) {
    return err && console.log(err);
  });
};

exports.default = add_notifications;