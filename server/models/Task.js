const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  column: [{
    value: Schema.Types.Mixed,
    dataType: String,
  }],

  comments: [{
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    body: String,
    date: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
  }],

  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },

  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
},
{ timestamps: true });

TaskSchema.statics.addColumn = function addColumn(type) {
  const bulk = this.model('Task').collection.initializeOrderedBulkOp();
  bulk.find({}).update({ $addToSet: { column: { ...type } } });
  bulk.execute((error) => {
    if (error) console.log(error);
  });
};


// Create Collection and add Schema
mongoose.model('Task', TaskSchema);
