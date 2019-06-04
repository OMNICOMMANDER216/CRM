const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const Controller = require('../controllers/controller.boards').boardsController;

// @route    GET /boards/
// @desc     returns list of all boards
// @access   private
router.get('/', isAuthenticated, Controller.getAll);

// @route    GET /boards:id
// @desc     return a single board byt id
// @access   private
router.get('/:id', isAuthenticated, Controller.getById);

// @route    POST /boards/
// @desc     Create a new board
// @access   private
router.post('/', isAuthenticated, Controller.create);

// @route    PUT /boards/
// @desc     update a board
// @access   private
router.put('/', isAuthenticated, Controller.update);

// @route    PUT /boards/groupsOrder
// @desc     update a board groupsOrder
// @access   private
router.put('/groupsOrder', isAuthenticated, Controller.updateGroupsOrder);

// @route    PUT /boards/moveBoard
// @desc     move board to different folder
// @access   private
router.put('/moveBoard', isAuthenticated, Controller.moveBoard);

// @route    PUT /boards/data
// @desc     add a new column to a board
// @access   private
router.put('/data', isAuthenticated, Controller.addColumn);

// @route    PUT /boards/removeColumn
// @desc     remove a column from a board
// @access   private
router.put('/removeColumn', isAuthenticated, Controller.removeColumn);

// @route    REMOVE /boards/:id
// @desc     remove a board
// @access   private
router.delete('/:id', isAuthenticated, Controller.deleteById);

module.exports = router;
