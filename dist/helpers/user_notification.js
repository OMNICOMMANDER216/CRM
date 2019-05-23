'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var User = require('mongoose').model('User');

function addNotifications(userIds, notification) {
  var bulk = User.collection.initializeOrderedBulkOp();
  bulk.find({ _id: { $in: [].concat(_toConsumableArray(userIds)) } }).update({ $addToSet: { notifications: notification._id } });
  bulk.execute(function (err) {
    return err && console.log(err);
  });
}

exports.default = addNotifications;