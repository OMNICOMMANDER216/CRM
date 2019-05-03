/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const Board = mongoose.model('Board');
const Folder = mongoose.model('Folder');
const Group = mongoose.model('Group');
const Task = mongoose.model('Task');

const initialColumns = require('../models/default_column');

exports.boardsController = {

  getAll: (req, res) => {
    Board.find()
      .populate('columns')
      .populate('groups')
      .exec((error, boards) => {
        if (error) {
          console.log(error);
          return res.json({
            success: false,
            message: 'Error fetching the data',
          });
        }
        return res.json({
          success: true,
          data: boards,
        });
      });
  },
  // Delete A board and remove board from users Projects
  getById: (req, res) => {
    // Remove board from users
    Board.findById(req.params.id)
      .populate({
        path: 'groups',
        populate: { path: 'tasks', model: 'Task' },
      })
      .exec((error, board) => {
        res.json({
          success: true,
          data: board,
        });
      });
  },

  create: (req, res, next) => {
    const newBoard = req.body.data;
    newBoard.columns = initialColumns;
    // Create initial groups
    Group.createInitialGroups((groupError, docs) => {
      if (groupError) console.log(groupError);
      const groupsIds = Object.values(docs.insertedIds).map(id => mongoose.Types.ObjectId(id));
      newBoard.groups = groupsIds;

      // Save document
      new Board(newBoard).save()
        .then((board) => {
          // insert borad into folder
          Folder.addBoard(board.folder, board._id, (err, folder) => {
            if (err) console.log(err);
            // populate
            Folder.populate(folder, 'boards', (folderError) => {
              if (folderError) throw folderError;

              res.json({
                success: true,
                data: folder,
              });
            });
          });
        }).catch((error) => {
          res.json({
            success: false,
            message: 'Error saving new board',
            error,
          });
        });
    });
  },

  update: (req, res) => {
    const updatedBoard = req.body.data;
    // updated board
    Board.findByIdAndUpdate(updatedBoard._id, updatedBoard, {
      new: true,
    }, (boardError, board) => {
      if (boardError) {
        res.json({
          success: false,
          message: boardError,
        });
      } else {
        Folder.findById(board.folder, (FolderError, folder) => {
          if (FolderError) console.log(FolderError);
          // populate
          Folder.populate(folder, 'boards', (err) => {
            res.json({
              success: true,
              data: folder,
            });
          });
        });
      }
    });
  },
  addColumn: (req, res) => {
    const updatedBoard = req.body.data;
    const cols = updatedBoard.columns;
    const newCol = {
      dataType: cols[cols.length - 1].type,
    };
    Task.addColumn(newCol);

    // updated board
    Board.findByIdAndUpdate(updatedBoard._id, updatedBoard, { new: true })
      .populate({
        path: 'groups',
        populate: { path: 'tasks', model: 'Task' },
      })
      .exec((boardError, board) => {
        if (boardError) {
          res.json({
            success: false,
            message: boardError,
          });
        } else {
          res.json({
            success: true,
            data: board,
          });
        }
      });
  },

  // Delete A board and remove board from users Projects
  deleteById: (req, res) => {
    Board.findById(req.params.id)
      .then((board) => {
        console.log(board.groups);

        Board.deleteOne({
          _id: board._id,
        }, (error) => {
          if (error) throw error;
          // remove groups
          Group.deleteMany({ _id: { $in: board.groups } }).exec();

          Task.deleteMany({ board: board._id }).exec();

          Folder.removeBoard(board.folder, board._id, (err, folder) => {
            if (err) console.log(err);
            // populate
            Folder.populate(folder, 'boards', (folderError) => {
              if (folderError) throw folderError;
              res.json({
                success: true,
                data: folder,
              });
            });
          });
        });
      });
  },

};
