const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const noteController = require('../controllers/controller.notes')
  .notesController;

// @route    GET /notes
// @desc     return list of all notes attached to a customer
// @access   private
router.get('/:id', isAuthenticated, noteController.getAll);

// @route    GET /notes/:id
// @desc     return single note by id
// @access   private
router.get('/note/:id', isAuthenticated, noteController.getById);

// @route    POST /notes
// @desc     Create a new note
// @access   private
router.post('/', isAuthenticated, noteController.create);

// @route    PUT /notes
// @desc     update a note
// @access   private
router.put('/', isAuthenticated, noteController.update);

// @route    REMOVE /notes/:id
// @desc     delete a note
// @access   private
router.delete('/:id', isAuthenticated, noteController.deleteById);

module.exports = router;
