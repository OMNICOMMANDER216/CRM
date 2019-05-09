'use strict';

/* eslint-disable no-underscore-dangle */
var mongoose = require('mongoose');

var Task = mongoose.model('Task');
var Group = mongoose.model('Group');

exports.tasksController = {

  getAll: function getAll(req, res) {
    Task.find().populate('boards').exec(function (error, tasks) {
      if (error) {
        console.log(error);
        return res.json({
          success: false,
          message: 'Error fetching the data'
        });
      }
      return res.json({
        success: true,
        data: tasks
      });
    });
  },

  create: function create(req, res, next) {
    var newTask = req.body.data;
    new Task(newTask).save().then(function (task) {
      // save  task in Group then return task

      Group.addTask(task, function (error, model) {
        // eslint-disable-next-line keyword-spacing
        if (error) console.log(error);

        // return inserted task
        res.json({
          success: true,
          data: task
        });
      });
    }).catch(function (error) {
      res.json({
        success: false,
        message: 'Error saving new task',
        error: error
      });
    });
  },

  update: function update(req, res) {
    var updatedTask = req.body.data;

    // updated task
    Task.findByIdAndUpdate(updatedTask._id, updatedTask, {
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

  // Delete A task and remove task from users Projects
  deleteById: function deleteById(req, res) {
    // Remove task from users
    Task.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        throw error;
      } else {
        return res.json({
          success: true,
          message: 'task deleted'
        });
      }
    });
  }

};