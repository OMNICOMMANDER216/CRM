'use strict';

var mongoose = require('mongoose');
var Group = mongoose.model('Group');

exports.groupsController = {

    getAll: function getAll(req, res) {
        Group.find().populate('boards').exec(function (error, groups) {
            if (error) {
                console.log(error);
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

    create: function create(req, res, next) {
        var newGroup = req.body.data;
        console.log(req.body);

        new Group(newGroup).save().then(function (group) {
            res.json({
                success: true,
                data: group
            });
        }).catch(function (error) {
            res.json({
                success: false,
                message: "Error saving new group"
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
        // Remove group from users
        Group.deleteOne({
            _id: req.params.id
        }, function (error) {
            if (error) {
                throw err;
            } else {
                return res.json({
                    success: true,
                    message: "group deleted"
                });
            }
        });
    }

};