const mongoose = require('mongoose');

const { Schema } = mongoose;

const FolderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: [
        'Overview',
        'Implementation',
        'Compliance',
        'QA',
        'Accounting',
        'Live Sites',
        'IT',
      ],
    },
    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Board',
      },
    ],
  },
  { timestamps: true },
);

FolderSchema.statics.addBoard = function addBoard(
  folder_id,
  board_id,
  callback,
) {
  this.model('Folder').findByIdAndUpdate(
    folder_id,
    { $addToSet: { boards: board_id } },
    { new: true },
    callback,
  );
};

FolderSchema.statics.removeBoard = function removeBoard(
  folder_id,
  board_id,
  callback,
) {
  this.model('Folder').findByIdAndUpdate(
    folder_id,
    { $pull: { boards: board_id } },
    { new: true },
    callback,
  );
};

// Create Collection and add Schema
mongoose.model('Folder', FolderSchema);
