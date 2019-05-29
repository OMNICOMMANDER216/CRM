const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const Controller = require('../controllers/controller.boards').boardsController;

// @route    GET /boards
// @desc     return list of all boards
// @access   private
router.get('/', Controller.getAll);

// @route    GET /boards:id
// @desc     return list of all boards
// @access   private
router.get('/:id', Controller.getById);

// @route    POST /boards
// @desc     Create a new board
// @access   private
router.post('/', Controller.create);

// @route    PUT /boards
// @desc     update a board
// @access   private
router.put('/', Controller.update);

// @route    PUT /boards
// @desc     update a board
// @access   private
router.put('/moveBoard', Controller.moveBoard);

// @route    PUT /boards/data
// @desc     update a board data
// @access   private
router.put('/data', Controller.addColumn);

// @route    PUT /boards/data
// @desc     update a board data
// @access   private
router.put('/removeColumn', Controller.removeColumn);

// @route    REMOVE /boards/:id
// @desc     delete a board
// @access   private
router.delete('/:id', Controller.deleteById);

module.exports = router;
