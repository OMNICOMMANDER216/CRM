'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
var Board = _mongoose2.default.model('Board');
var Folder = _mongoose2.default.model('Folder');
var Group = _mongoose2.default.model('Group');
var Task = _mongoose2.default.model('Task');

var initialColumns = require('../models/default_column');

exports.boardsController = {
  getAll: function getAll(req, res) {
    Board.find().populate('columns').populate('groups').exec(function (error, boards) {
      if (error) {
        return res.json({
          success: false,
          message: 'Error fetching the data',
          error: error
        });
      }
      return res.json({
        success: true,
        data: boards
      });
    });
  },

  // Delete A board and remove board from users Projects
  getById: function getById(req, res) {
    // Remove board from users
    Board.findById(req.params.id).populate({
      path: 'groups',
      populate: { path: 'tasks', model: 'Task' }
    }).exec(function (error, board) {
      res.json({
        success: true,
        data: board
      });
    });
  },

  create: function create(req, res) {
    var newBoard = req.body.data;
    newBoard.columns = initialColumns;
    if (newBoard.customer) {
      // Create initial groups
      Group.createInitialGroups(function (groupError, docs) {
        if (groupError) console.log(groupError);
        var groupsIds = Object.values(docs.insertedIds).map(function (id) {
          return _mongoose2.default.Types.ObjectId(id);
        });
        newBoard.groups = groupsIds;

        // Save document
        new Board(newBoard).save().then(function (board) {
          // insert borad into folder
          Folder.addBoard(board.folder, board._id, function (err, folder) {
            if (err) console.log(err);
            // populate
            Folder.populate(folder, 'boards', function (folderError) {
              if (folderError) throw folderError;

              res.json({
                success: true,
                data: folder,
                createdBoardId: board._id
              });
            });
          });
        }).catch(function (error) {
          res.json({
            success: false,
            message: 'Error saving new board',
            error: error
          });
        });
      });
    } else {
      // Save document
      newBoard = (0, _lodash.omit)(newBoard, 'customer');
      new Board(newBoard).save().then(function (board) {
        // insert borad into folder
        Folder.addBoard(board.folder, board._id, function (err, folder) {
          if (err) console.log(err);
          // populate
          Folder.populate(folder, 'boards', function (folderError) {
            if (folderError) throw folderError;

            res.json({
              success: true,
              data: folder,
              createdBoardId: board._id
            });
          });
        });
      }).catch(function (error) {
        res.json({
          success: false,
          message: 'Error saving new board',
          error: error
        });
      });
    }
  },

  update: function update(req, res) {
    var updatedBoard = req.body.data;
    // updated board
    Board.findByIdAndUpdate(updatedBoard._id, updatedBoard, {
      new: true
    }, function (boardError, board) {
      if (boardError) {
        res.json({
          success: false,
          message: boardError
        });
      } else {
        Folder.findById(board.folder, function (FolderError, folder) {
          if (FolderError) console.log(FolderError);
          // populate
          Folder.populate(folder, 'boards', function (err) {
            if (err) throw err;
            res.json({
              success: true,
              data: folder
            });
          });
        });
      }
    });
  },

  updateGroupsOrder: function updateGroupsOrder(req, res) {
    var _req$body$data = req.body.data,
        groupsOrder = _req$body$data.groupsOrder,
        boardId = _req$body$data.boardId;
    // updated board

    Board.findByIdAndUpdate(boardId, { groupsOrder: groupsOrder }, {
      new: true
    }, function (boardError, board) {
      if (boardError) {
        res.json({
          success: false,
          message: boardError
        });
      } else {
        res.json({
          success: true,
          data: board
        });
      }
    });
  },

  moveBoard: function moveBoard(req, res) {
    var _req$body = req.body,
        data = _req$body.data,
        moveTo = _req$body.moveTo;

    Folder.removeBoard(data.folder, data._id, function (err) {
      if (err) console.log(err);
    });

    Folder.addBoard(moveTo, data._id, function (err) {
      if (err) console.log(err);
    });

    data.folder = moveTo;

    Board.findByIdAndUpdate(data._id, data, function (error, board) {
      if (error) throw error;

      //  Get all Folders and send back
      Folder.find().populate('boards').exec(function (execError, folders) {
        if (execError) {
          return res.json({
            success: false,
            message: 'Error fetching the data'
          });
        }
        return res.json({
          success: true,
          data: folders
        });
      });
    });
  },

  addColumn: function addColumn(req, res) {
    var updatedBoard = req.body.data;

    // updated board
    Board.findByIdAndUpdate(updatedBoard._id, updatedBoard, { new: true }).then(function (model) {
      // Update tasks
      var cols = model.columns;
      var newCol = {
        dataType: cols[cols.length - 1].type,
        colRef: cols[cols.length - 1]._id,
        _id: _mongoose2.default.Types.ObjectId()
      };
      Task.addColumn(newCol, model._id, function (error) {
        if (error) throw error;
        // query and populate Board
        Board.findById(model._id).populate({
          path: 'groups',
          populate: { path: 'tasks', model: 'Task' }
        }).exec(function (boardError, board) {
          if (boardError) {
            res.json({
              success: false,
              message: boardError
            });
          } else {
            res.json({
              success: true,
              data: board
            });
          }
        });
      });
    });
  },

  removeColumn: function removeColumn(req, res) {
    var _req$body$data2 = req.body.data,
        board = _req$body$data2.board,
        columnId = _req$body$data2.columnId;

    // Remove Column from tasks

    var bulk = Task.collection.initializeOrderedBulkOp();
    bulk.find({}).update({
      $pull: { column: { colRef: _mongoose2.default.Types.ObjectId(columnId) } }
    });

    bulk.execute(function (err) {
      if (err) throw err;

      // Remove column from Board
      Board.findByIdAndUpdate(_mongoose2.default.Types.ObjectId(board._id), { $pull: { columns: { _id: _mongoose2.default.Types.ObjectId(columnId) } } }, { new: true }).populate({
        path: 'groups',
        populate: { path: 'tasks', model: 'Task' }
      }).exec(function (boardError, model) {
        if (boardError) {
          res.json({
            success: false,
            message: boardError
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

  // Delete A board and remove board from users Projects
  deleteById: function deleteById(req, res) {
    Board.findById(req.params.id).then(function (board) {
      Board.deleteOne({
        _id: board._id
      }, function (error) {
        if (error) throw error;
        // remove groups
        Group.deleteMany({ _id: { $in: board.groups } }).exec();

        Task.deleteMany({ board: board._id }).exec();

        Folder.removeBoard(board.folder, board._id, function (err, folder) {
          if (err) throw err;
          // populate
          Folder.populate(folder, 'boards', function (folderError) {
            if (folderError) throw folderError;
            res.json({
              success: true,
              data: folder
            });
          });
        });
      });
    });
  }
};