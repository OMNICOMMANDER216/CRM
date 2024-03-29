'use strict';

var router = require('express').Router();
var passport = require('passport');

var _require = require('../controllers/controller.auth'),
    authController = _require.authController;

// @route    GET /auth/google
// @desc     Google authentication
// @access   public


router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// @route    GET /auth/google/callback
// @desc     handle google authentication callback
// @access   public
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), authController.googleCallback);

// @route    GET /auth/logout
// @desc     Logout
// @access   private
router.get('/logout', authController.logout);

module.exports = router;