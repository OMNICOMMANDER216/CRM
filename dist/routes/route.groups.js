'use strict';

var router = require('express').Router();

var _require = require('../helpers/auth'),
    isAuthenticated = _require.isAuthenticated;

var Controller = require('../controllers/controller.groups').groupsController;

// @route    GET /groups
// @desc     return list of all groups
// @access   private
router.get('/', isAuthenticated, Controller.getAll);

// @route    POST /groups
// @desc     Create a new group
// @access   private
router.post('/', isAuthenticated, Controller.create);

// @route    PUT /groups
// @desc     update a group
// @access   private
router.put('/', isAuthenticated, Controller.update);

// @route    REMOVE /groups/:id
// @desc     delete a group
// @access   private
router.delete('/:id/:baordId', isAuthenticated, Controller.delete);

module.exports = router;