/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    googleID: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: [
        'Bookkeeping',
        'Sales',
        'Pm',
        'DevAdmin',
        'Developer',
        'Compliance',
        'Admin',
      ],
    },
    customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
      },
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
      },
    ],
  },
  { timestamps: true },
);

UserSchema.statics.addCustomer = function (
  userId,
  customerId,
  notificationId,
) {
  this.model('User').findByIdAndUpdate(
    userId,
    { $addToSet: { customers: customerId, notifications: notificationId } },
    (error, model) => {
      if (error) {
        throw error;
      }
    },
  );
};

UserSchema.statics.removeCustomer = function (userId, customerId) {
  this.model('User').findByIdAndUpdate(
    userId,
    { $pull: { customers: customerId } },
    (error, model) => {
      if (error) {
        throw error;
      }
    },
  );
};

UserSchema.statics.addNotifications = function addNotifications(query, notification) {
  const bulk = this.model('User').collection.initializeOrderedBulkOp();
  bulk.find(query)
    .update({ $addToSet: { notifications: notification._id } });
  bulk.execute((err) => {
    if (err) throw err;
  });
};

UserSchema.methods.setRole = (role) => {
  this.role = role;
};

// Create Collection and add Schema
mongoose.model('User', UserSchema);
