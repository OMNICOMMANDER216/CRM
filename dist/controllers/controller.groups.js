'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = _mongoose2.default.model('Group');
var Board = _mongoose2.default.model('Board');
// const Task = mongoose.model('Task');

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
    // ************************************************
    // Remove the task and comments related to the group first
    // *************************************************
    // Task.deleteMany({ group: req.params.id }).exec();
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