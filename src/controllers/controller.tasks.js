/* eslint-disable no-underscore-dangle */
import * as _ from 'lodash';

const mongoose = require('mongoose');

const Task = mongoose.model('Task');
const Group = mongoose.model('Group');

exports.tasksController = {
  getAll: (req, res) => {
    Task.find()
      .populate('boards')
      .exec((error, tasks) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error fetching the data',
            error,
          });
        }
        return res.json({
          success: true,
          data: tasks,
        });
      });
  },

  create: (req, res, next) => {
    const newTask = req.body.data;
    new Task(newTask)
      .save()
      .then((task) => {
        // save  task in Group then return task

        Group.addTask(task, (error, model) => {
          // eslint-disable-next-line keyword-spacing
          if (error) console.log(error);

          // return inserted task
          res.json({
            success: true,
            data: task,
          });
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: 'Error saving new task',
          error,
        });
      });
  },

  update: (req, res) => {
    const updatedTask = req.body.data;

    // updated task
    Task.findByIdAndUpdate(
      updatedTask._id,
      updatedTask,
      {
        new: true,
      },
      (error, model) => {
        if (error) {
          res.json({
            success: false,
            message: 'Error updating!',
            error,
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

  // Delete A task and remove task from users Projects
  deleteById: (req, res) => {
    // Remove task from users
    Task.deleteOne(
      {
        _id: req.params.id,
      },
      (error) => {
        if (error) {
          throw error;
          res.json({
            success: false,
            message: 'Error updating!',
            error,
          });
        } else {
          return res.json({
            success: true,
            message: 'task deleted',
          });
        }
      },
    );
  },
};
