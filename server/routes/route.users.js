const router = require('express').Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../helpers/auth');
const { usersController } = require('../controllers/controller.users');

const User = mongoose.model('User');


// @route    GET /users/currentUser
// @desc     Return current Logged in users information
// @access   private
router.post('/', (req, res) => {
  const user = req.body;
  console.log(user);
  new User(user)
    .save()
    .then((user) => { res.json(user); })
    .catch((error) => {
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
