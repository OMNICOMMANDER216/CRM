'use strict';

var router = require('express').Router();
var mongoose = require('mongoose');

var _require = require('../helpers/auth'),
    isAuthenticated = _require.isAuthenticated;

var _require2 = require('../controllers/controller.users'),
    usersController = _require2.usersController;

var User = mongoose.model('User');

// @route    GET /users/currentUser
// @desc     Return current Logged in users information
// @access   private
router.post('/', function (req, res) {
  var user = req.body;
  console.log(user);
  new User(user).save().then(function (user) {
    res.json(user);
  }).catch(function (error) {
    console.log(error);
    res.json(error);
  });
});

// @route    GET /users/currentUser
// @desc     Return current Logged in users information
// @access   private
router.get('/currentUser', isAuthenticated, usersController.getCurrentUser);

// @route    GET /users/all
// @desc     Get list of all users
// @access   private
router.get('/all', isAuthenticated, usersController.getAll);

// @route    GET /users/:id
// @desc     Get a user By id
// @access   private
router.get('/:id', isAuthenticated, usersController.getById);

// @route    PUT /users/update-role
// @desc     Update a user Role
// @access   private
router.put('/update-role', isAuthenticated, usersController.updateRole);

// @route    PUT /users/notificationRead
// @desc     Update user notification
// @access   private
router.put('/notificationArchive', isAuthenticated, usersController.notificationArchive);

module.exports = router;