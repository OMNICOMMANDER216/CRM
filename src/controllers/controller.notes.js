const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");
const Note = mongoose.model("Note");

exports.notesController = {
  getAll: (req, res) => {
    let id = req.params.id;
    Note.find({ cu: mongoose.Types.ObjectId(id) })
      .then(notes => {
        return res.json({
          success: true,
          data: notes
        });
      })
      .catch(error => {
        return res.json({
          success: false,
          message: "Error fetching the data"
        });
      });
  },

  getById: (req, res) => {
    Note.findById(req.params.id).then((error, model) => {
      if (error) {
        return res.json({
          success: false,
          data: "Error retrieving Note"
        });
      } else {
        return res.json({
          success: true,
          data: model
        });
      }
    });
  },

  create: (req, res, next) => {
    let newNote = req.body.data;

    new Note(newNote)
      .save()
      .then(note => {
        res.json({
          success: true,
          data: note
        });
      })
      .catch(error => {
        res.json({
          success: false,
          message: "Error saving new note"
        });
      });
  },

  update: (req, res) => {
    let updatedNote = req.body.data;
    // updated customer
    Note.findByIdAndUpdate(
      updatedNote._id,
      updatedNote,
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

  // Delete A customer and remove customer from users Projects
  deleteById: (req, res) => {
    // Remove customer from users
    Note.deleteOne(
      {
        _id: req.params.id
      },
      function(error) {
        if (error) {
          throw err;
        } else {
          return res.json({
            success: true,
            message: "customer deleted"
          });
        }
      }
    );
  }
};
