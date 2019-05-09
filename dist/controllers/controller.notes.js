'use strict';

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Note = mongoose.model('Note');

exports.notesController = {

    getAll: function getAll(req, res) {
        var id = req.params.id;
        Note.find({ cu: mongoose.Types.ObjectId(id) }).then(function (notes) {
            return res.json({
                success: true,
                data: notes
            });
        }).catch(function (error) {
            return res.json({
                success: false,
                message: "Error fetching the data"
            });
        });
    },

    getById: function getById(req, res) {
        Note.findById(req.params.id).then(function (error, model) {
            if (error) {
                return res.json({
                    success: false,
                    data: 'Error retrieving Note'
                });
            } else {
                return res.json({
                    success: true,
                    data: model
                });
            }
        });
    },

    create: function create(req, res, next) {
        var newNote = req.body.data;

        new Note(newNote).save().then(function (note) {
            res.json({
                success: true,
                data: note
            });
        }).catch(function (error) {
            res.json({
                success: false,
                message: "Error saving new note"
            });
        });
    },

    update: function update(req, res) {
        var updatedNote = req.body.data;
        // updated customer
        Note.findByIdAndUpdate(updatedNote._id, updatedNote, {
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

    // Delete A customer and remove customer from users Projects
    deleteById: function deleteById(req, res) {

        // Remove customer from users
        Note.deleteOne({
            _id: req.params.id
        }, function (error) {
            if (error) {
                throw err;
            } else {
                return res.json({
                    success: true,
                    message: "customer deleted"
                });
            }
        });
    }

};