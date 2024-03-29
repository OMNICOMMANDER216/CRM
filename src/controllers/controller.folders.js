const mongoose = require('mongoose');

const Folder = mongoose.model('Folder');

exports.foldersController = {
  getAll: (req, res) => {
    Folder.find()
      .populate('boards')
      .exec((error, folders) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error fetching the data',
            error,
          });
        }
        return res.json({
          success: true,
          data: folders,
        });
      });
  },

  create: (req, res) => {
    const newFolder = req.body.data;

    new Folder(newFolder)
      .save()
      .then((folder) => {
        res.json({
          success: true,
          data: folder,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: 'Error saving new folder',
          error,
        });
      });
  },

  update: (req, res) => {
    const updatedFolder = req.body.data;
    // updated folder
    Folder.findByIdAndUpdate(
      updatedFolder._id,
      updatedFolder,
      {
        new: true,
      },
      (error, model) => {
        Folder.populate(model, 'boards', (err) => {
          if (err) {
            res.json({
              success: false,
              message: err,
            });
          } else {
            res.json({
              success: true,
              data: model,
            });
          }
        });
      },
    );
  },

  // Delete A folder and remove folder from users Projects
  deleteById: (req, res) => {
    // Remove folder from users
    Folder.deleteOne(
      {
        _id: req.params.id,
      },
      (error) => {
        if (error) {
          return res.json({
            success: false,
            message: 'Error deleting folder',
            error,
          });
        }
        return res.json({
          success: true,
          message: 'folder deleted',
        });
      },
    );
  },
};
