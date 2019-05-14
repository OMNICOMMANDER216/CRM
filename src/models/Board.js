const mongoose = require("mongoose");

const { Schema } = mongoose;

const BoardSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },
    description: {
      type: String
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      required: true
    },
    columns: [
      {
        title: {
          type: String,
          required: true
        },
        type: {
          type: String,
          enum: ["name", "user", "status", "priority", "last_updated", "date"],
          required: true
        }
      }
    ],
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
  },
  { timestamps: true }
);

BoardSchema.statics.addGroup = function addGroup(board_id, group_id, callback) {
  this.model("Board").findByIdAndUpdate(
    board_id,
    { $addToSet: { groups: group_id } },
    { new: true },
    callback
  );
};

BoardSchema.statics.removeGroup = function removeGroup(
  board_id,
  group_id,
  callback
) {
  this.model("Board").findByIdAndUpdate(
    board_id,
    { $pull: { groups: group_id } },
    { new: true },
    callback
  );
};

// Create Collection and add Schema
mongoose.model("Board", BoardSchema);
