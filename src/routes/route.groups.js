const router = require('express').Router();
const { isAuthenticated } = require('../helpers/auth');
const Controller = require('../controllers/controller.groups').groupsController;

// @route    GET /groups
// @desc     return list of all groups
// @access   private
router.get('/', Controller.getAll);

// @route    POST /groups
// @desc     Create a new group
// @access   private
router.post('/', Controller.create);

// @route    PUT /groups
// @desc     update a group
// @access   private
router.put('/', Controller.update);

// @route    DELETE /groups/:id
// @desc     delete a group
// @access   private
router.delete('/:id', Controller.deleteById);

module.exports = router;
