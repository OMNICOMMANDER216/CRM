import addNotifications from '../helpers/user_notification';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const Notification = mongoose.model('Notification');

exports.usersController = {
  
  getCurrentUser: (req, res) => {
    res.json(req.currentUser);
  },

  getAll: (req, res) => {
    User.find({})
      .populate('customers')
      .populate('notifications')
      .exec((error, users) => {
        if (error) {
          res.json({
            success: false,
            message: 'Server error',
            error,
          });
        } else {
          res.json({
            success: true,
            data: users,
          });
        }
      });
  },

  getById: (req, res) => {
    User.findById(req.params.id)
      .populate('customers')
      .exec((error, user) => {
        if (error) {
          res.json({
            success: false,
            message: 'Error retrieving User',
            error,
          });
        } else {
          res.json({
            success: true,
            data: user,
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
          new: true,
        },
        (error, user) => {
          if (error) {
            res.json({
              success: false,
              message: 'Error Updating User',
              error,
            });
          } else {
            res.json({
              success: true,
              data: user,
            });
          }
        },
      );
    }
  },

  notify: (req, res) => {
    // eslint-disable-next-line prefer-const
    let { userIds, notification } = req.body.data;
    userIds = userIds.map(id => mongoose.Types.ObjectId(id));
    new Notification(notification)
      .save()
      .then((n) => {
        addNotifications(userIds, n);
        res.json({
          success: true,
          message: 'User Notified',
        });
      }).catch(error => console.log(error));
  },

  notificationArchive: (req, res) => {
    const notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, {
      $pull: { notifications: notification._id },
    }).then((model) => {
      User.findById(model._id)
        .populate('notifications')
        .populate('customers')
        .exec((error, user) => {
          if (error) {
            res.json({
              success: false,
              message: 'Error Updating User',
              error,
            });
          } else {
            res.json({
              success: true,
              data: user,
            });
          }
        });
    });
  },
};