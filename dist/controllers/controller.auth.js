"use strict";

var secret = require("../config/config");
var jwt = require("jsonwebtoken");

exports.authController = {
  googleCallback: function googleCallback(req, res) {
    // Successful authentication, redirect home.

    var token = jwt.sign({
      _id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      role: req.user.role,
      image: req.user.image
    }, secret.jwtSecret.secret);

    res.cookie("t", token, {
      expire: new Date() + 9999
    });
    // Production
    return res.redirect("/logged?token=" + token);
    // Development
    // return res.redirect('http://localhost:3000?token='+token);
  },

  logout: function logout(req, res) {
    res.clearCookie("t");
    req.logout();
    res.redirect("/");
  }
};