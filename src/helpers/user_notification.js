const User = require('mongoose').model('User');

function addNotifications(userIds, notification) {
  const bulk = User.collection.initializeOrderedBulkOp();
  bulk.find({ _id: { $in: [...userIds] } })
    .update({ $addToSet: { notifications: notification._id } });
  bulk.execute(err => err && console.log(err));
}

export default addNotifications;
