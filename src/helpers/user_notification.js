const User = require('mongoose').model('User');

function addNotifications(query, notification) {
  const bulk = User.collection.initializeOrderedBulkOp();
  bulk.find({ ...query })
    .update({ $addToSet: { notifications: notification._id } });
  bulk.execute(err => err && console.log(err));
}

export default addNotifications;
