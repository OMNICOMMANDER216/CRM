"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var User = require('mongoose').model("User");

function add_notifications(query, notification) {
  var bulk = User.collection.initializeOrderedBulkOp();
  bulk.find(_extends({}, query)).update({ $addToSet: { notifications: notification._id } });
  bulk.execute(function (err) {
    return err && console.log(err);
  });
};

exports.default = add_notifications;