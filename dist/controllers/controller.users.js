

let _user_notification = require('../helpers/user_notification');

let _user_notification2 = _interopRequireDefault(_user_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mongoose = require('mongoose');

let User = mongoose.model('User');
let Notification = mongoose.model('Notification');

exports.usersController = {

  getCurrentUser: function getCurrentUser(req, res) {
    res.json(req.currentUser);
  },

  getAll: function getAll(req, res) {
    User.find({}).populate('customers').populate('notifications').exec((error, users) => {
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
    User.findById(req.params.id).populate('customers').exec((error, user) => {
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
      let userToUpdate = req.body.data;
      User.findByIdAndUpdate(userToUpdate._id, { role: userToUpdate.role }, {
        new: true,
      }, (error, user) => {
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
    // eslint-disable-next-line prefer-const
    let _req$body$data = req.body.data;
        var userIds = _req$body$data.userIds;
        var {notification} = _req$body$data;

    userIds = userIds.map((id) => {
      return mongoose.Types.ObjectId(id);
    });
    new Notification(notification).save().then((n) => {
      (0, _user_notification2.default)(userIds, n);
      res.json({
        success: true,
        message: 'User Notified'
      });
    }).catch((error) => {
      return console.log(error);
    });
  },

  notificationArchive: function notificationArchive(req, res) {
    let notification = req.body.data;

    // delete notification
    User.findByIdAndUpdate(req.currentUser._id, {
      $pull: { notifications: notification._id },
    }).then((model) => {
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
  },
};
