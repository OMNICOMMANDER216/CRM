const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    cu: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

// Create Collection and add Schema
mongoose.model('Note', NoteSchema);
