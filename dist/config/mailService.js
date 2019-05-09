'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var nodemailer = require('nodemailer');

var _require = require("googleapis"),
    google = _require.google;

var OAuth2 = google.auth.OAuth2;
var config = require('../config');

var mailer = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, subject, html) {
        var oauth2Client, header, accessToken, transporter, mailOptions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        oauth2Client = new OAuth2(config.gmail.client_id, config.gmail.client_secret, "https://developers.google.com/oauthplayground");


                        oauth2Client.setCredentials({
                            refresh_token: config.gmail.refresh_token
                        });
                        _context.next = 4;
                        return oauth2Client.getRequestHeaders();

                    case 4:
                        header = _context.sent;
                        accessToken = header.Authorization.replace('Bearer ', "");
                        transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                type: 'OAuth2',
                                user: config.gmail.client_user,
                                clientId: config.gmail.client_id,
                                clientSecret: config.gmail.secret,
                                refreshToken: config.gmail.refresh_token,
                                accessToken: accessToken
                            }
                        });
                        mailOptions = {
                            from: 'OMNICOMMANDER <contact@omnicommander.com>',
                            to: to,
                            subject: subject,
                            html: html
                        };


                        transporter.sendMail(mailOptions, function (err, res) {
                            if (err) {
                                console.log('Error sending Email');
                                console.log(err);
                            } else {
                                console.log('email sent');
                            }
                            transporter.close();
                        });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function mailer(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = mailer;