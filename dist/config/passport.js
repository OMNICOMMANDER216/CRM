"use strict";

var GoogleStrategy = require("passport-google-oauth20").Strategy;
var googleKeys = require("./config").google;

var mongoose = require("mongoose");
//load user mmodel
var User = mongoose.model("User");

module.exports = function (passport) {
  // Google Oauth Strategy
  passport.use("google", new GoogleStrategy({
    clientID: googleKeys.clientId,
    clientSecret: googleKeys.clientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  }, function (accessToken, refreshToken, profile, done) {
    var image = profile._json.image.url.replace("/s50", "");

    if (profile._json.domain === "omnicommander.com") {
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
          //Create User
          new User(newUser).save().then(function (user) {
            done(null, user);
          });
        }
      });
    } else {
      done(null, false);
    }
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
      done(null, user);
    }).catch(function (err) {
      console.log(err);
    });
  });
};