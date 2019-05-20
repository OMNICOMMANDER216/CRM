const User = require('mongoose').model("User");

function add_notifications(query, notification) {
  const bulk = User.collection.initializeOrderedBulkOp();
  bulk.find(query)
    .update({ $addToSet: { notifications: notification._id } });
  bulk.execute(err => err && console.log(err));
};

export default add_notifications;