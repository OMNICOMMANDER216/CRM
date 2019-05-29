'use strict';

var mongoose = require('mongoose');

var Folder = mongoose.model('Folder');

exports.foldersController = {
  getAll: function getAll(req, res) {
    Folder.find().populate('boards').exec(function (error, folders) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error fetching the data',
          error: error
        });
      }
      return res.json({
        success: true,
        data: folders
      });
    });
  },

  create: function create(req, res) {
    var newFolder = req.body.data;

    new Folder(newFolder).save().then(function (folder) {
      res.json({
        success: true,
        data: folder
      });
    }).catch(function (error) {
      res.json({
        success: false,
        message: 'Error saving new folder',
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
      Folder.populate(model, 'boards', function (err) {
        if (err) {
          res.json({
            success: false,
            message: err
          });
        } else {
          res.json({
            success: true,
            data: model
          });
        }
      });
    });
  },

  // Delete A folder and remove folder from users Projects
  deleteById: function deleteById(req, res) {
    // Remove folder from users
    Folder.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error deleting folder',
          error: error
        });
      }
      return res.json({
        success: true,
        message: 'folder deleted'
      });
    });
  }
};