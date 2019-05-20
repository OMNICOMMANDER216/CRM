"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ColumnSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["name", "user", "date", "status", "priority", "last_updated", "date"],
    required: true
  }
}, { timestamps: true });

// Create Collection and add Schema
mongoose.model("Column", ColumnSchema);