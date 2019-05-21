const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');
const Note = mongoose.model('Note');

exports.notesController = {
  getAll: (req, res) => {
    const { id } = req.params;
    Note.find({ cu: mongoose.Types.ObjectId(id) })
      .then(notes => res.json({
        success: true,
        data: notes,
      }))
      .catch(error => res.json({
        success: false,
        message: 'Error fetching the data',
        error,
      }));
  },

  getById: (req, res) => {
    Note.findById(req.params.id).then((error, model) => {
      if (error) {
        return res.json({
          success: false,
          data: 'Error retrieving Note',
          error,
        });
      }
      return res.json({
        success: true,
        data: model,
      });
    });
  },

  create: (req, res, next) => {
    const newNote = req.body.data;

    new Note(newNote)
      .save()
      .then((note) => {
        res.json({
          success: true,
          data: note,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: 'Error saving new note',
          error,
        });
      });
  },

  update: (req, res) => {
    const updatedNote = req.body.data;
    // updated customer
    Note.findByIdAndUpdate(
      updatedNote._id,
      updatedNote,
      {
        new: true,
      },
      (error, model) => {
        if (error) {
          res.json({
            success: false,
            message: 'Error updating',
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

  // Delete A customer and remove customer from users Projects
  deleteById: (req, res) => {
    // Remove customer from users
    Note.deleteOne(
      {
        _id: req.params.id,
      },
      (error) => {
        if (error) {
          throw error;
        } else {
          return res.json({
            success: true,
            message: 'customer deleted',
          });
        }
      },
    );
  },
};
