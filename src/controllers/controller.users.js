const mongoose = require("mongoose");

const User = mongoose.model("User");
const Notification = mongoose.model("Notification");

import add_notifications from '../helpers/user_notification';

exports.usersController = {
  getCurrentUser: (req, res) => {
    res.json(req.currentUser);
  },

  getAll: (req, res) => {
    User.find({})
      .populate("customers")
      .populate("notifications")
      .exec((error, users) => {
        if (error) {
          res.json({
            success: false,
            message: "Server error",
            error
          });
        } else {
          res.json({
            success: true,
            data: users
          });
        }
      });
  },

  getById: (req, res) => {
    User.findById(req.params.id)
      .populate("customers")
      .exec((error, user) => {
        if (error) {
          res.json({
            success: false,
            message: "Error retrieving User",
            error
          });
        } else {
          res.json({
            success: true,
            data: user
          });
        }
      });
  },

  updateRole: (req, res) => {
    if (req.currentUser) {
      const userToUpdate = req.body.data;
      User.findByIdAndUpdate(
        userToUpdate._id,
        { role: userToUpdate.role },
        {
          new: true
        },
        (error, user) => {
          if (error) {
            res.json({
              success: false,
              message: "Error Updating User",
              error
            });
          } else {
            res.json({
              success: true,
              data: user
            });
          }
        }
      );
    }
  },

  notify: (req, res) => {
    const { userId, notification } = req.body.data;
    new Notification(notification)
      .save()
      .then(n => {
          add_notifications({ _id : mongoose.Types.ObjectId(userId) }, n);
          res.json({
            success: true,
            message: "User Notified" 
          })
      }).catch((error) => console.log(error));
  },

  notificationArchive: (req, res) => {
    const notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, {
      $pull: { notifications: notification._id }
    }).then(model => {
      User.findById(model._id)
        .populate("notifications")
        .populate("customers")
        .exec((error, user) => {
          if (error) {
            res.json({
              success: false,
              message: "Error Updating User",
              error
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
