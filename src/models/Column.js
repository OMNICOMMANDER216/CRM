const mongoose = require('mongoose');

const { Schema } = mongoose;

const ColumnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        'name',
        'user',
        'date',
        'status',
        'priority',
        'last_updated',
        'date',
      ],
      required: true,
    },
  },
  { timestamps: true },
);

// Create Collection and add Schema
mongoose.model('Column', ColumnSchema);
