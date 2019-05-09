'use strict';

/* eslint-disable no-underscore-dangle */
var mongoose = require('mongoose');

var Board = mongoose.model('Board');
var Folder = mongoose.model('Folder');
var Group = mongoose.model('Group');
var Task = mongoose.model('Task');

var initialColumns = require('../models/default_column');

exports.boardsController = {

  getAll: function getAll(req, res) {
    Board.find().populate('columns').populate('groups').exec(function (error, boards) {
      if (error) {
        console.log(error);
        return res.json({
          success: false,
          message: 'Error fetching the data'
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

  create: function create(req, res, next) {
    var newBoard = req.body.data;
    newBoard.columns = initialColumns;
    // Create initial groups
    Group.createInitialGroups(function (groupError, docs) {
      if (groupError) console.log(groupError);
      var groupsIds = Object.values(docs.insertedIds).map(function (id) {
        return mongoose.Types.ObjectId(id);
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
              data: folder
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
            res.json({
              success: true,
              data: folder
            });
          });
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
      Folder.find().populate('boards').exec(function (error, folders) {
        if (error) {
          console.log(error);
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
        _id: mongoose.Types.ObjectId()
      };
      Task.addColumn(newCol, function (error) {
        if (error) console.log(error);
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
    var _req$body$data = req.body.data,
        board = _req$body$data.board,
        columnId = _req$body$data.columnId;

    // Remove Column from tasks

    var bulk = Task.collection.initializeOrderedBulkOp();
    bulk.find({}).update({ $pull: { column: { colRef: mongoose.Types.ObjectId(columnId) } } });
    bulk.execute(function (err) {
      console.log('passed');
      if (err) console.log(err);

      // Remove column from Board
      Board.findByIdAndUpdate(mongoose.Types.ObjectId(board._id), { $pull: { columns: { _id: mongoose.Types.ObjectId(columnId) } } }, { new: true }).populate({
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
          if (err) console.log(err);
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