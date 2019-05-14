const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let NotificationSchema = new Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    isRead: {
      type: Boolean,
      default: false
    },
    cu: {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  },
  { timestamps: true }
);

//Create Collection and add Schema
mongoose.model("Notification", NotificationSchema);
