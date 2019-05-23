/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import { omit } from 'lodash';

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
          return res.json({
            success: false,
            message: 'Error fetching the data',
            error,
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

  create: (req, res) => {
    let newBoard = req.body.data;
    newBoard.columns = initialColumns;
    if (newBoard.customer) {
      // Create initial groups
      Group.createInitialGroups((groupError, docs) => {
        if (groupError) console.log(groupError);
        const groupsIds = Object.values(docs.insertedIds).map(id => mongoose.Types.ObjectId(id));
        newBoard.groups = groupsIds;

        // Save document
        new Board(newBoard)
          .save()
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
          })
          .catch((error) => {
            res.json({
              success: false,
              message: 'Error saving new board',
              error,
            });
          });
      });
    } else {
      // Save document
      console.log('here');
      newBoard = omit(newBoard, 'customer');
      console.log(newBoard);
      new Board(newBoard)
        .save()
        .then((board) => {
          console.log(board);
          // insert borad into folder
          Folder.addBoard(board.folder, board._id, (err, folder) => {
            if (err) console.log(err);
            console.log(folder);

            // populate
            Folder.populate(folder, 'boards', (folderError) => {
              if (folderError) throw folderError;

              res.json({
                success: true,
                data: folder,
              });
            });
          });
        })
        .catch((error) => {
          res.json({
            success: false,
            message: 'Error saving new board',
            error,
          });
        });
    }
  },

  update: (req, res) => {
    const updatedBoard = req.body.data;
    // updated board
    Board.findByIdAndUpdate(
      updatedBoard._id,
      updatedBoard,
      {
        new: true,
      },
      (boardError, board) => {
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
              if (err) throw err;
              res.json({
                success: true,
                data: folder,
              });
            });
          });
        }
      },
    );
  },

  moveBoard: (req, res) => {
    const { data, moveTo } = req.body;
    Folder.removeBoard(data.folder, data._id, (err) => {
      if (err) console.log(err);
    });

    Folder.addBoard(moveTo, data._id, (err) => {
      if (err) console.log(err);
    });

    data.folder = moveTo;

    Board.findByIdAndUpdate(data._id, data, (error, board) => {
      if (error) throw error;

      //  Get all Folders and send back
      Folder.find()
        .populate('boards')
        .exec((execError, folders) => {
          if (execError) {
            return res.json({
              success: false,
              message: 'Error fetching the data',
            });
          }
          return res.json({
            success: true,
            data: folders,
          });
        });
    });
  },

  addColumn: (req, res) => {
    const updatedBoard = req.body.data;

    // updated board
    Board.findByIdAndUpdate(updatedBoard._id, updatedBoard, { new: true }).then(
      (model) => {
        // Update tasks
        const cols = model.columns;
        const newCol = {
          dataType: cols[cols.length - 1].type,
          colRef: cols[cols.length - 1]._id,
          _id: mongoose.Types.ObjectId(),
        };
        Task.addColumn(newCol, model._id, (error) => {
          if (error) throw error;
          // query and populate Board
          Board.findById(model._id)
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
        });
      },
    );
  },

  removeColumn: (req, res) => {
    const { board, columnId } = req.body.data;

    // Remove Column from tasks
    const bulk = Task.collection.initializeOrderedBulkOp();
    bulk
      .find({})
      .update({
        $pull: { column: { colRef: mongoose.Types.ObjectId(columnId) } },
      });

    bulk.execute((err) => {
      if (err) throw err;

      // Remove column from Board
      Board.findByIdAndUpdate(
        mongoose.Types.ObjectId(board._id),
        { $pull: { columns: { _id: mongoose.Types.ObjectId(columnId) } } },
        { new: true },
      )
        .populate({
          path: 'groups',
          populate: { path: 'tasks', model: 'Task' },
        })
        .exec((boardError, model) => {
          if (boardError) {
            res.json({
              success: false,
              message: boardError,
            });
          } else {
            res.json({
              success: true,
              data: model,
            });
          }
        });
    });
  },

  // Delete A board and remove board from users Projects
  deleteById: (req, res) => {
    Board.findById(req.params.id).then((board) => {
      Board.deleteOne(
        {
          _id: board._id,
        },
        (error) => {
          if (error) throw error;
          // remove groups
          Group.deleteMany({ _id: { $in: board.groups } }).exec();

          Task.deleteMany({ board: board._id }).exec();

          Folder.removeBoard(board.folder, board._id, (err, folder) => {
            if (err) throw err;
            // populate
            Folder.populate(folder, 'boards', (folderError) => {
              if (folderError) throw folderError;
              res.json({
                success: true,
                data: folder,
              });
            });
          });
        },
      );
    });
  },
};
