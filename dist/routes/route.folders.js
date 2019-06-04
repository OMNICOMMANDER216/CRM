'use strict';

var router = require('express').Router();

var _require = require('../helpers/auth'),
    isAuthenticated = _require.isAuthenticated;

var Controller = require('../controllers/controller.folders').foldersController;

// @route    GET /folders
// @desc     return list of all folders
// @access   private
router.get('/', isAuthenticated, Controller.getAll);

// @route    POST /folders
// @desc     Create a new folder
// @access   private
router.post('/', isAuthenticated, Controller.create);

// @route    PUT /folders
// @desc     update a folder
// @access   private
router.put('/', isAuthenticated, Controller.update);

// @route    REMOVE /folders/:id
// @desc     delete a folder
// @access   private
router.delete('/:id', isAuthenticated, Controller.deleteById);

module.exports = router;