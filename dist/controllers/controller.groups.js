'use strict';

var mongoose = require('mongoose');

var Group = mongoose.model('Group');
var Board = mongoose.model('Board');

exports.groupsController = {
  getAll: function getAll(req, res) {
    Group.find().populate('boards').exec(function (error, groups) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error fetching the data'
        });
      }
      return res.json({
        success: true,
        data: groups
      });
    });
  },

  create: function create(req, res) {
    var _req$body$data = req.body.data,
        group = _req$body$data.group,
        boardId = _req$body$data.boardId;


    new Group(group).save().then(function (saveGroup) {
      // Add to board
      Board.addGroup(boardId, saveGroup._id, function (error) {
        if (error) throw error;
        res.json({
          success: true,
          data: saveGroup
        });
      });
    }).catch(function (error) {
      res.json({
        success: false,
        message: 'Error saving new group',
        error: error
      });
    });
  },

  update: function update(req, res) {
    var updatedGroup = req.body.data;
    // updated group
    Group.findByIdAndUpdate(updatedGroup._id, updatedGroup, {
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

  // Delete A group and remove group from users Projects
  deleteById: function deleteById(req, res) {
    // Remove group from users
    Group.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        throw err;
      } else {
        return res.json({
          success: true,
          message: 'group deleted'
        });
      }
    });
  }
};