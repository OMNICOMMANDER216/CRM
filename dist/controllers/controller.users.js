'use strict';

var mongoose = require('mongoose');

var User = mongoose.model('User');
var Notification = mongoose.model('Notification');

exports.usersController = {

  getCurrentUser: function getCurrentUser(req, res) {
    res.json(req.currentUser);
  },

  getAll: function getAll(req, res) {
    User.find({}).populate('customers').populate('notifications').exec(function (err, users) {
      if (err) {
        res.json({
          success: false,
          message: 'Server error'
        });
      } else {
        res.json({
          success: true,
          data: users
        });
      }
    });
  },

  getById: function getById(req, res) {
    User.findById(req.params.id).populate('customers').exec(function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: 'Error retrieving User'
        });
      } else {
        res.json({
          success: true,
          data: user
        });
      }
    });
  },

  updateRole: function updateRole(req, res) {
    if (req.currentUser) {
      var userToUpdate = req.body.data;
      User.findByIdAndUpdate(userToUpdate._id, { role: userToUpdate.role }, {
        new: true
      }, function (err, user) {
        if (err) {
          res.json({
            success: false,
            message: 'Error Updating User'
          });
        } else {
          res.json({
            success: true,
            data: user
          });
        }
      });
    }
  },

  notificationArchive: function notificationArchive(req, res) {
    var notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, { $pull: { notifications: notification._id } }).then(function (model) {
      User.findById(model._id).populate('notifications').populate('customers').exec(function (err, user) {
        if (err) {
          res.json({
            success: false,
            message: 'Error Updating User'
          });
        } else {
          res.json({
            success: true,
            data: user
          });
        }
      });
    });
  }
};