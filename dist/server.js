'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('./config/config');

require('./models/User');

require('./models/Customer');

require('./models/Notification');

require('./models/Note');

require('./models/Folder');

require('./models/Task');

require('./models/Group');

require('./models/Board');

require('./models/Column');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
var app = (0, _express2.default)();

// mailer();
// imports

// load Project models


// Setting up server for socket io
// server.listen(port);

// load models
var port = process.env.PORT || 8080;
var sessionsSecret = require('./config/sessionConfig').secret;

// Passport config
require('./config/passport')(_passport2.default);

// Load Routes
var authRoute = require('./routes/route.auth');
var usersRoute = require('./routes/route.users');
var customersRoute = require('./routes/route.customers');
var notesRoute = require('./routes/route.notes');

// Load Project routes
var foldersRoute = require('./routes/route.folders');
var boardsRoute = require('./routes/route.boards');
var groupsRoute = require('./routes/route.groups');
var tasksRoute = require('./routes/route.tasks');

// Mongoose connect
var mongodbUri = 'mongodb://' + _config.db.username + ':' + _config.db.password + '@ds123635.mlab.com:23635/omni-board';
_mongoose2.default.connect(mongodbUri, { useNewUrlParser: true }).then(function () {
  console.log('mongoDB connected');
}).catch(function (err) {
  console.log(' Mongoose connection error', err);
});

var connection = _mongoose2.default.connection;

// Cors middleware

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Compression Middleware
app.use((0, _compression2.default)());
app.use((0, _cors2.default)(corsOptions));
app.use((0, _morgan2.default)('dev'));

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({
  extended: true,
  limit: '50mb'
}));
// parse application/json
app.use(_bodyParser2.default.json({
  extended: true,
  limit: '50mb'
}));
// Middle wares needed for passport
app.use((0, _cookieParser2.default)());

app.use((0, _expressSession2.default)({
  secret: 'sessionsSecret',
  resave: false,
  saveUninitialized: false
}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// passport middleware
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.get('/loginError', function (req, res) {
  return res.json({
    success: false,
    message: ' login failed, try again and make sure email belong to Omnicommander'
  });
});

// Routes
app.use('/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/customers', customersRoute);
app.use('/api/notes', notesRoute);
app.use('/api/folders', foldersRoute);
app.use('/api/boards', boardsRoute);
app.use('/api/groups', groupsRoute);
app.use('/api/tasks', tasksRoute);

// Serving static files
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../client/build')));
// serving html
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});