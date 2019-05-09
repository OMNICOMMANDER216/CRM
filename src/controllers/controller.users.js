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
      .exec((err, users) => {
        if (err) {
          res.json({
            success: false,
            message: 'Server error',
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
      .exec((err, user) => {
        if (err) {
          res.json({
            success: false,
            message: 'Error retrieving User',
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
      User.findByIdAndUpdate(userToUpdate._id, { role: userToUpdate.role }, {
        new: true,
      }, (err, user) => {
        if (err) {
          res.json({
            success: false,
            message: 'Error Updating User',
          });
        } else {
          res.json({
            success: true,
            data: user,
          });
        }
      });
    }
  },

  notificationArchive: (req, res) => {
    const notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, { $pull: { notifications: notification._id } }).then((model) => {
      User.findById(model._id)
        .populate('notifications')
        .populate('customers')
        .exec((err, user) => {
          if (err) {
            res.json({
              success: false,
              message: 'Error Updating User',
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
