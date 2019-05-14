const mongoose = require("mongoose");
const Group = mongoose.model("Group");
const Board = mongoose.model("Board");

exports.groupsController = {
  getAll: (req, res) => {
    Group.find()
      .populate("boards")
      .exec((error, groups) => {
        if (error) {
          return res.json({
            success: false,
            message: "Error fetching the data"
          });
        } else {
          return res.json({
            success: true,
            data: groups
          });
        }
      });
  },

  create: (req, res, next) => {
    let { group, boardId } = req.body.data;

    new Group(group)
      .save()
      .then(saveGroup => {
        // Add to board
        Board.addGroup(boardId, saveGroup._id, (error, board) => {
          if (error) throw error;
          res.json({
            success: true,
            data: saveGroup
          });
        });
      })
      .catch(error => {
        res.json({
          success: false,
          message: "Error saving new group",
          error: error
        });
      });
  },

  update: (req, res) => {
    let updatedGroup = req.body.data;
    // updated group
    Group.findByIdAndUpdate(
      updatedGroup._id,
      updatedGroup,
      {
        new: true
      },
      function(error, model) {
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
      }
    );
  },

  // Delete A group and remove group from users Projects
  deleteById: (req, res) => {
    // Remove group from users
    Group.deleteOne(
      {
        _id: req.params.id
      },
      function(error) {
        if (error) {
          throw err;
        } else {
          return res.json({
            success: true,
            message: "group deleted"
          });
        }
      }
    );
  }
};
