'use strict';

var _user_notification = require('../helpers/user_notification');

var _user_notification2 = _interopRequireDefault(_user_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Notification = mongoose.model('Notification');

exports.usersController = {

  getCurrentUser: function getCurrentUser(req, res) {
    res.json(req.currentUser);
  },

  getAll: function getAll(req, res) {
    User.find({}).populate('customers').populate('notifications').exec(function (error, users) {
      if (error) {
        res.json({
          success: false,
          message: 'Server error',
          error: error
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
    User.findById(req.params.id).populate('customers').exec(function (error, user) {
      if (error) {
        res.json({
          success: false,
          message: 'Error retrieving User',
          error: error
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
      }, function (error, user) {
        if (error) {
          res.json({
            success: false,
            message: 'Error Updating User',
            error: error
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

  notify: function notify(req, res) {
    var _req$body$data = req.body.data,
        userId = _req$body$data.userId,
        notification = _req$body$data.notification;

    new Notification(notification).save().then(function (n) {
      (0, _user_notification2.default)({ _id: mongoose.Types.ObjectId(userId) }, n);
      res.json({
        success: true,
        message: 'User Notified'
      });
    }).catch(function (error) {
      return console.log(error);
    });
  },

  notificationArchive: function notificationArchive(req, res) {
    var notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, {
      $pull: { notifications: notification._id }
    }).then(function (model) {
      User.findById(model._id).populate('notifications').populate('customers').exec(function (error, user) {
        if (error) {
          res.json({
            success: false,
            message: 'Error Updating User',
            error: error
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