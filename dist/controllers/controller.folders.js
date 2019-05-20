"use strict";

var mongoose = require("mongoose");

var Folder = mongoose.model("Folder");

exports.foldersController = {
  getAll: function getAll(req, res) {
    Folder.find().populate("boards").exec(function (error, folders) {
      if (error) {
        console.log(error);
        return res.json({
          success: false,
          message: "Error fetching the data"
        });
      }
      return res.json({
        success: true,
        data: folders
      });
    });
  },

  create: function create(req, res, next) {
    var newFolder = req.body.data;

    new Folder(newFolder).save().then(function (folder) {
      res.json({
        success: true,
        data: folder
      });
    }).catch(function (error) {
      res.json({
        success: false,
        message: "Error saving new folder",
        error: error
      });
    });
  },

  update: function update(req, res) {
    var updatedFolder = req.body.data;
    // updated folder
    Folder.findByIdAndUpdate(updatedFolder._id, updatedFolder, {
      new: true
    }, function (error, model) {
      if (error) {
        res.json({
          success: false,
          message: error
        });
      } else {
        res.json({
          success: true,
          data: model
        });
      }
    });
  },

  // Delete A folder and remove folder from users Projects
  deleteById: function deleteById(req, res) {
    // Remove folder from users
    Folder.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        throw err;
      } else {
        return res.json({
          success: true,
          message: "folder deleted"
        });
      }
    });
  }
};