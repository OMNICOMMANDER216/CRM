const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const noteController = require('../controllers/controller.notes')
  .notesController;

// @route    GET /notes
// @desc     return list of all notes
// @access   private
router.get('/:id', noteController.getAll);

// @route    GET /notes/:id
// @desc     return single note by id
// @access   private
router.get('/note/:id', noteController.getById);

// @route    POST /notes
// @desc     Create a new note
// @access   private
router.post('/', noteController.create);

// @route    PUT /notes
// @desc     update a note
// @access   private
router.put('/', noteController.update);

// @route    DELETE /notes/:id
// @desc     delete a note
// @access   private
router.delete('/:id', noteController.deleteById);

module.exports = router;
