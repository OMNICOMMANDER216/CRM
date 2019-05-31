'use strict';

var _user_role_notification = require('../helpers/user_role_notification');

var _user_role_notification2 = _interopRequireDefault(_user_role_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');
var User = mongoose.model('User');
var Notification = mongoose.model('Notification');

exports.customersController = {
  getAll: function getAll(req, res) {
    Customer.find({}).populate('Pm').populate('Dev').populate('Compliance').exec(function (error, customers) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error fetching the data',
          error: error
        });
      }
      return res.json({
        success: true,
        data: customers
      });
    });
  },

  getById: function getById(req, res) {
    Customer.findById(req.params.id).populate('dev').populate('pm').populate('Compliance').exec(function (error, model) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error retrieving the Customer'
        });
      }
      return res.json({
        success: true,
        data: model
      });
    });
  },

  create: function create(req, res) {
    var newCustomer = req.body.data;

    // Send Email to Compliance if Email services added
    if (newCustomer.services.includes('email')) {
      new Notification({
        title: 'Email Service Requested',
        content: newCustomer.name + ' paid for Email',
        cu: newCustomer._id
      }).save().then(function (notification) {
        (0, _user_role_notification2.default)({ role: 'Compliance' }, notification);
      });
    }

    // Set Initial Status
    newCustomer.status = 'Signed';

    // Create and update log
    var log = {
      status: newCustomer.status,
      time: Date.now()
    };
    newCustomer.log = log;

    new Customer(newCustomer).save().then(function (customer) {
      new Notification({
        title: 'New customer',
        content: customer.name + ' has been added',
        cu: customer._id
      }).save().then(function (notification) {
        (0, _user_role_notification2.default)({ role: { $in: ['Admin', 'Bookkeeping'] } }, notification);
      });
      res.json({
        success: true,
        data: customer
      });
    }).catch(function (error) {
      res.json({
        success: false,
        message: 'Error saving new Customer',
        error: error
      });
    });
  },

  update: function update(req, res) {
    var updatedCustomer = req.body.data;

    Customer.findById(updatedCustomer._id, function (error, dbCustomer) {
      if (error) {
        return res.json({
          success: false,
          message: 'Server error'
        });
      }
      if (dbCustomer.status !== updatedCustomer.status) {
        var log = {
          status: updatedCustomer.status,
          time: Date.now()
        };
        // add log to customer logs
        updatedCustomer.log.push(log);
      }

      // Update Log for Final Invoice
      if (!dbCustomer.finalPayment && updatedCustomer.finalPayment) {
        var _log = {
          status: 'FinalInvoice',
          time: Date.now()
        };
        // add log to customer logs
        updatedCustomer.log.push(_log);
      }

      // updated customer
      Customer.findByIdAndUpdate(updatedCustomer._id, updatedCustomer, {
        new: true
      }, function (err, result) {
        if (err) {
          return res.json({
            success: false,
            message: error
          });
        }
        return res.json({
          success: true,
          data: result
        });
      });
    });
  },

  updateMiddleware: function updateMiddleware(req, res, next) {
    var updatedCustomer = req.body.data;

    // Get the data in the DB for Comparison
    Customer.findById(updatedCustomer._id, function (error, oldCustomer) {
      if (error) {
        return next();
      }
      // send notification to Admin and Bookkeeping on Live if DNS update
      if (oldCustomer.status !== 'DNS' && updatedCustomer.status === 'DNS') {
        new Notification({
          title: 'Ready for DNS',
          content: updatedCustomer.name + ' is ready for DNS!',
          cu: updatedCustomer._id
        }).save().then(function (notification) {
          (0, _user_role_notification2.default)({ role: { $in: ['Admin', 'DevAdmin'] } }, notification);
        });
      }

      // send notification to Admin and Bookkeeping if Customer Paid
      if (oldCustomer.status !== 'Deposit' && updatedCustomer.status === 'Deposit') {
        // Notify Admins of deposit being paid
        new Notification({
          title: 'Deposit Paid',
          content: updatedCustomer.name + ' paid the Deposit',
          cu: updatedCustomer._id
        }).save().then(function (notification) {
          (0, _user_role_notification2.default)({ role: { $in: ['Admin'] } }, notification);
        });
      }

      // send notification to Admin and Bookkeeping on Live
      if (oldCustomer.status !== 'Live' && updatedCustomer.status === 'Live') {
        new Notification({
          title: 'Site Live',
          content: updatedCustomer.name + ' is now Live!',
          cu: updatedCustomer._id
        }).save().then(function (notification) {
          (0, _user_role_notification2.default)({}, notification);
        });
      }

      // send notification to Admin and Sales When Final Payment Received
      if (!oldCustomer.finalPayment && updatedCustomer.finalPayment) {
        new Notification({
          title: 'Final Payment Received',
          content: updatedCustomer.name + ' Paid it\'s final Payment!',
          cu: updatedCustomer._id
        }).save().then(function (notification) {
          (0, _user_role_notification2.default)({ role: { $in: ['Admin', 'Sales'] } }, notification);
        });
      }

      // Create Assignment Notification
      if (oldCustomer.dev !== updatedCustomer.dev || oldCustomer.pm !== updatedCustomer.pm || oldCustomer.compliance !== updatedCustomer.compliance || oldCustomer.QA !== updatedCustomer.QA) {
        new Notification({
          title: 'Site Assigned',
          content: 'You have been assigned ' + updatedCustomer.name,
          cu: updatedCustomer._id
        }).save().then(function (notification) {
          if ((oldCustomer.dev && oldCustomer.dev.toString()) !== updatedCustomer.dev) {
            User.removeCustomer(oldCustomer.dev, oldCustomer._id);

            if (updatedCustomer.dev) {
              // Save a notification and then pass its value to a user
              User.addCustomer(updatedCustomer.dev, oldCustomer._id, notification._id);
            } else {
              req.body.data.dev = undefined;
            }
          }

          // remove customers from PM's customers array
          if ((oldCustomer.pm && oldCustomer.pm.toString()) !== updatedCustomer.pm) {
            User.removeCustomer(oldCustomer.pm, oldCustomer._id);
            if (updatedCustomer.pm) {
              // Save a notification and then pass its value to a user
              User.addCustomer(updatedCustomer.pm, oldCustomer._id, notification._id);
            } else {
              req.body.data.pm = undefined;
            }
          }

          if ((oldCustomer.compliance && oldCustomer.compliance.toString()) !== updatedCustomer.compliance) {
            User.removeCustomer(oldCustomer.compliance, oldCustomer._id);
            if (updatedCustomer.compliance) {
              // Save a notification and then pass its value to a user
              User.addCustomer(updatedCustomer.compliance, oldCustomer._id, notification._id);
            } else {
              req.body.data.compliance = undefined;
            }
          }

          if ((oldCustomer.QA && oldCustomer.QA.toString()) !== updatedCustomer.QA) {
            User.removeCustomer(oldCustomer.QA, oldCustomer._id);
            if (updatedCustomer.QA) {
              // Save a notification and then pass its value to a user
              User.addCustomer(updatedCustomer.QA, oldCustomer._id, notification._id);
            } else {
              req.body.data.QA = undefined;
            }
          }
        });
      } else {
        return next();
      }

      // Go to next middleware
      return next();
    });
  },

  // Delete A customer and remove customer from users Projects
  deleteById: function deleteById(req, res) {
    var customerId = req.params.id;

    Customer.findById(customerId, function (error, model) {
      // Update Dev customer list
      if (model.dev) User.removeCustomer(model.dev, model._id);

      // remove customers from PM's customers array
      if (model.pm) User.removeCustomer(model.pm, model._id);

      // remove customers from compliance's customers array
      if (model.compliance) User.removeCustomer(model.compliance, model._id);

      // Remove customer from users
      Customer.deleteOne({ _id: req.params.id }, function (deleteError) {
        if (deleteError) {
          return res.json({
            success: false,
            message: 'Error deleting customer',
            error: deleteError
          });
        }
        return res.json({
          success: true,
          message: 'customer deleted'
        });
      });
    });
  },

  sendData: function sendData(req, res) {
    delete req.old_customer;
    res.json(req.customer);
  }
};