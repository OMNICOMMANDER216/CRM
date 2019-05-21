'use strict';

/* eslint-disable no-underscore-dangle */
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var mongoose = require('mongoose');
var googleKeys = require('./config').google;

// load user mmodel
var User = mongoose.model('User');

module.exports = function (passport) {
  // Google Oauth Strategy
  passport.use('google', new GoogleStrategy({
    clientID: googleKeys.clientId,
    clientSecret: googleKeys.clientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, function (accessToken, refreshToken, profile, done) {
    var image = profile._json.image.url.replace('/s50', '');

    var newUser = {
      googleID: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      image: image
    };

    User.findOne({
      googleID: profile.id
    }).then(function (user) {
      if (user) {
        done(null, user);
      } else {
        // Create User
        new User(newUser).save().then(function (model) {
          done(null, model);
        });
      }
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
      done(null, user);
    }).catch(function (err) {
      throw err;
    });
  });
};