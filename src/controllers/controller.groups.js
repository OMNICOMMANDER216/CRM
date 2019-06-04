import mongoose from 'mongoose';

const Group = mongoose.model('Group');
const Board = mongoose.model('Board');
const Task = mongoose.model('Task');
// const Task = mongoose.model('Task');

exports.groupsController = {
  getAll: (req, res) => {
    Group.find()
      .populate('boards')
      .exec((error, groups) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error fetching the data',
          });
        }
        return res.json({
          success: true,
          data: groups,
        });
      });
  },

  create: (req, res) => {
    const { group, boardId } = req.body.data;

    new Group(group)
      .save()
      .then((saveGroup) => {
        // Add to board
        Board.addGroup(boardId, saveGroup._id, (error) => {
          if (error) throw error;
          res.json({
            success: true,
            data: saveGroup,
          });
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: 'Error saving new group',
          error,
        });
      });
  },

  update: (req, res) => {
    const updatedGroup = req.body.data;
    // updated group
    Group.findByIdAndUpdate(
      updatedGroup._id,
      updatedGroup,
      {
        new: true,
      },
      (error, model) => {
        if (error) {
          res.json({
            success: false,
            message: error,
          });
        } else {
          res.json({
            success: true,
            data: model,
          });
        }
      },
    );
  },

  // Delete A group and remove group from users Projects
  delete: (req, res) => {
    // ************************************************
    // Remove the task and comments related to the group first
    // *************************************************
    const { id, BoardId } = req.params;
    Board.removeGroup(BoardId, id, (boardError) => {
      if (boardError) console.log(boardError);

      Group.deleteOne(
        {
          _id: id,
        },
        (error) => {
          if (error) {
            throw error;
          } else {
            // remove task associated with the removed group
            Task.deleteMany({ group: mongoose.Types.ObjectId(id) }).exec();

            return res.json({
              success: true,
              message: 'group deleted',
            });
          }
        },
      );
    });
    // Remove group from users
  },
};
