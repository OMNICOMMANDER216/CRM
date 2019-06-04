const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const Controller = require('../controllers/controller.tasks').tasksController;

// @route    GET /tasks
// @desc     return list of all tasks
// @access   private
router.get('/', isAuthenticated, Controller.getAll);

// @route    POST /tasks
// @desc     Create a new task
// @access   private
router.post('/', isAuthenticated, Controller.create);

// @route    PUT /tasks
// @desc     update a task
// @access   private
router.put('/', isAuthenticated, Controller.update);

// @route    REMOVE /tasks/:id
// @desc     remove a task
// @access   private
router.delete('/:id', isAuthenticated, Controller.deleteById);

module.exports = router;
