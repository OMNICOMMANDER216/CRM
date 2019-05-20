"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  column: [{
    value: Schema.Types.Mixed,
    dataType: String,
    colRef: {
      type: Schema.Types.ObjectId
    }
  }],

  comments: [{
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    body: String,
    date: {
      type: Date,
      default: Date.now()
    }
  }],

  group: {
    type: Schema.Types.ObjectId,
    ref: "Group"
  },

  board: {
    type: Schema.Types.ObjectId,
    ref: "Board"
  }
}, { timestamps: true });

TaskSchema.statics.addColumn = function addColumn(type, callback) {
  var bulk = this.model("Task").collection.initializeOrderedBulkOp();
  bulk.find({}).update({ $addToSet: { column: _extends({}, type) } });
  bulk.execute(callback);
};

// Create Collection and add Schema
mongoose.model("Task", TaskSchema);