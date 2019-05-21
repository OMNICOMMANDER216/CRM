import addNotifications from '../helpers/user_notification';

const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');
const User = mongoose.model('User');
const Notification = mongoose.model('Notification');

exports.customersController = {
  getAll: (req, res) => {
    Customer.find({})
      .populate('Pm')
      .populate('Dev')
      .populate('Compliance')
      .exec((error, customers) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error fetching the data',
            error,
          });
        }
        return res.json({
          success: true,
          data: customers,
        });
      });
  },

  getById: (req, res) => {
    Customer.findById(req.params.id)
      .populate('dev')
      .populate('pm')
      .populate('Compliance')
      .exec((error, model) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error retrieving the Customer',
          });
        }
        return res.json({
          success: true,
          data: model,
        });
      });
  },

  create: (req, res) => {
    const newCustomer = req.body.data;

    // Send Email to Compliance if Email services added
    if (newCustomer.services.includes('email')) {
      new Notification({
        title: 'Email Service Requested',
        content: `${newCustomer.name} paid for Email`,
        cu: newCustomer._id,
      })
        .save()
        .then((notification) => {
          addNotifications({ role: 'Compliance' }, notification);
        });
    }

    // Set Initial Status
    newCustomer.status = 'Signed';

    // Create and update log
    const log = {
      status: newCustomer.status,
      time: Date.now(),
    };
    newCustomer.log = log;

    new Customer(newCustomer)
      .save()
      .then((customer) => {
        new Notification({
          title: 'New customer',
          content: `${customer.name} has been added`,
          cu: customer._id,
        })
          .save()
          .then((notification) => {
            addNotifications(
              { role: { $in: ['Admin', 'Bookkeeping'] } },
              notification,
            );
          });
        res.json({
          success: true,
          data: customer,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: 'Error saving new Customer',
          error,
        });
      });
  },

  update: (req, res) => {
    const updatedCustomer = req.body.data;

    Customer.findById(updatedCustomer._id, (error, dbCustomer) => {
      if (error) {
        return res.json({
          success: false,
          message: 'Server error',
        });
      }
      if (dbCustomer.status !== updatedCustomer.status) {
        const log = {
          status: updatedCustomer.status,
          time: Date.now(),
        };
        // add log to customer logs
        updatedCustomer.log.push(log);
      }

      // Update Log for Final Invoice
      if (!dbCustomer.finalPayment && updatedCustomer.finalPayment) {
        const log = {
          status: 'FinalInvoice',
          time: Date.now(),
        };
        // add log to customer logs
        updatedCustomer.log.push(log);
      }

      // updated customer
      Customer.findByIdAndUpdate(
        updatedCustomer._id,
        updatedCustomer,
        {
          new: true,
        },
        (err, result) => {
          if (err) {
            return res.json({
              success: false,
              message: error,
            });
          }
          return res.json({
            success: true,
            data: result,
          });
        },
      );
    });
  },

  updateMiddleware: (req, res, next) => {
    const updatedCustomer = req.body.data;

    // Get the data in the DB for Comparison
    Customer.findById(updatedCustomer._id, (error, oldCustomer) => {
      if (error) {
        return next();
      }
      // send notification to Admin and Bookkeeping on Live if DNS update
      if (oldCustomer.status !== 'DNS' && updatedCustomer.status === 'DNS') {
        new Notification({
          title: 'Ready for DNS',
          content: `${updatedCustomer.name} is ready for DNS!`,
          cu: updatedCustomer._id,
        })
          .save()
          .then((notification) => {
            addNotifications(
              { role: { $in: ['Admin', 'DevAdmin'] } },
              notification,
            );
          });
      }

      // send notification to Admin and Bookkeeping if Customer Paid
      if (
        oldCustomer.status !== 'Deposit'
        && updatedCustomer.status === 'Deposit'
      ) {
        // Notify Admins of deposit being paid
        new Notification({
          title: 'Deposit Paid',
          content: `${updatedCustomer.name} paid the Deposit`,
          cu: updatedCustomer._id,
        })
          .save()
          .then((notification) => {
            addNotifications({ role: { $in: ['Admin'] } }, notification);
          });
      }

      // send notification to Admin and Bookkeeping on Live
      if (oldCustomer.status !== 'Live' && updatedCustomer.status === 'Live') {
        new Notification({
          title: 'Site Live',
          content: `${updatedCustomer.name} is now Live!`,
          cu: updatedCustomer._id,
        })
          .save()
          .then((notification) => {
            addNotifications({}, notification);
          });
      }

      // send notification to Admin and Sales When Final Payment Received
      if (!oldCustomer.finalPayment && updatedCustomer.finalPayment) {
        new Notification({
          title: 'Final Payment Received',
          content: `${updatedCustomer.name} Paid it's final Payment!`,
          cu: updatedCustomer._id,
        })
          .save()
          .then((notification) => {
            addNotifications(
              { role: { $in: ['Admin', 'Sales'] } },
              notification,
            );
          });
      }

      // Create Assignment Notification
      if (
        oldCustomer.dev !== updatedCustomer.dev
        || oldCustomer.pm !== updatedCustomer.pm
        || oldCustomer.compliance !== updatedCustomer.compliance
        || oldCustomer.QA !== updatedCustomer.QA
      ) {
        new Notification({
          title: 'Site Assigned',
          content: `You have been assigned ${updatedCustomer.name}`,
          cu: updatedCustomer._id,
        })
          .save()
          .then((notification) => {
            if (
              (oldCustomer.dev && oldCustomer.dev.toString())
              !== updatedCustomer.dev
            ) {
              User.removeCustomer(oldCustomer.dev, oldCustomer._id);

              if (updatedCustomer.dev) {
                // Save a notification and then pass its value to a user
                User.addCustomer(
                  updatedCustomer.dev,
                  oldCustomer._id,
                  notification._id,
                );
              } else {
                req.body.data.dev = undefined;
              }
            }

            // remove customers from PM's customers array
            if (
              (oldCustomer.pm && oldCustomer.pm.toString())
              !== updatedCustomer.pm
            ) {
              User.removeCustomer(oldCustomer.pm, oldCustomer._id);
              if (updatedCustomer.pm) {
                // Save a notification and then pass its value to a user
                User.addCustomer(
                  updatedCustomer.pm,
                  oldCustomer._id,
                  notification._id,
                );
              } else {
                req.body.data.pm = undefined;
              }
            }

            if (
              (oldCustomer.compliance && oldCustomer.compliance.toString())
              !== updatedCustomer.compliance
            ) {
              User.removeCustomer(oldCustomer.compliance, oldCustomer._id);
              if (updatedCustomer.compliance) {
                // Save a notification and then pass its value to a user
                User.addCustomer(
                  updatedCustomer.compliance,
                  oldCustomer._id,
                  notification._id,
                );
              } else {
                req.body.data.compliance = undefined;
              }
            }

            if (
              (oldCustomer.QA && oldCustomer.QA.toString()) !== updatedCustomer.QA
            ) {
              User.removeCustomer(oldCustomer.QA, oldCustomer._id);
              if (updatedCustomer.QA) {
                // Save a notification and then pass its value to a user
                User.addCustomer(
                  updatedCustomer.QA,
                  oldCustomer._id,
                  notification._id,
                );
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
  deleteById: (req, res) => {
    const customerId = req.params.id;

    Customer.findById(customerId, (error, model) => {
      // Update Dev customer list
      model.dev && User.removeCustomer(model.dev, model._id);

      // remove customers from PM's customers array
      model.pm && User.removeCustomer(model.pm, model._id);

      // remove customers from compliance's customers array
      model.compliance && User.removeCustomer(model.compliance, model._id);

      // Remove customer from users
      Customer.deleteOne({ _id: req.params.id },
        (deleteError) => {
          if (deleteError) {
            return res.json({
              success: false,
              message: 'Error deleting customer',
              error: deleteError
            });
          } 
            return res.json({
              success: true,
              message: 'customer deleted',
            });
          
        });
    });
  },

  sendData: (req, res) => {
    delete req.old_customer;
    res.json(req.customer);
  },
};
