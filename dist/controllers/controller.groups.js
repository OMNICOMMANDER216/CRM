'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = _mongoose2.default.model('Group');
var Board = _mongoose2.default.model('Board');
var Task = _mongoose2.default.model('Task');
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
      console.log(model);
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
  delete: function _delete(req, res) {
    // ************************************************
    // Remove the task and comments related to the group first
    // *************************************************
    var _req$params = req.params,
        id = _req$params.id,
        BoardId = _req$params.BoardId;

    Board.removeGroup(BoardId, id, function (boardError) {
      if (boardError) console.log(boardError);

      Group.deleteOne({
        _id: id
      }, function (error) {
        if (error) {
          throw error;
        } else {
          // remove task associated with the removed group
          Task.deleteMany({ group: _mongoose2.default.Types.ObjectId(id) }).exec();

          return res.json({
            success: true,
            message: 'group deleted'
          });
        }
      });
    });
    // Remove group from users
  }
};