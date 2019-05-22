const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    column: [
      {
        value: Schema.Types.Mixed,
        dataType: String,
        colRef: {
          type: Schema.Types.ObjectId,
        },
      },
    ],

    comments: [
      {
        author: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        body: String,
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],

    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },

    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
  },
  { timestamps: true },
);

TaskSchema.statics.addColumn = function addColumn(column, boardId, callback) {
  const bulk = this.model('Task').collection.initializeOrderedBulkOp();
  bulk.find({ board: boardId }).update({ $addToSet: { column: { ...column } } });
  bulk.execute(callback);
};

// Create Collection and add Schema
mongoose.model('Task', TaskSchema);
