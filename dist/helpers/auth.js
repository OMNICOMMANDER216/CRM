'use strict';

var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var secret = require('../config/config');

//load user model
var User = mongoose.model('User');

module.exports = {

    isAuthenticated: function isAuthenticated(req, res, next) {
        var authorizationHeader = req.headers['authorization'];
        var token = void 0;

        if (authorizationHeader) {
            token = authorizationHeader.split(' ')[1];
        }

        if (token) {

            jwt.verify(token, secret.jwtSecret.secret, function (err, decoded) {
                if (err) {
                    res.status(401).json({
                        error: 'Failed to authenticate'
                    });
                } else {
                    User.findById(decoded._id, function (err, user) {
                        if (err) {
                            console.log(err);
                        } else {
                            if (!user) {
                                res.status(404).json({
                                    error: 'No such user'
                                });
                            } else {
                                req.currentUser = user;
                                next();
                            }
                        }
                    });
                }
            });
        } else {
            res.status(403).json({
                success: false,
                message: 'No token provided'
            });
        }
    }
};