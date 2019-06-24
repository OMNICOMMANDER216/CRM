'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _route = require('./routes/route.auth');

var _route2 = _interopRequireDefault(_route);

var _route3 = require('./routes/route.users');

var _route4 = _interopRequireDefault(_route3);

var _route5 = require('./routes/route.customers');

var _route6 = _interopRequireDefault(_route5);

var _route7 = require('./routes/route.notes');

var _route8 = _interopRequireDefault(_route7);

var _route9 = require('./routes/route.folders');

var _route10 = _interopRequireDefault(_route9);

var _route11 = require('./routes/route.boards');

var _route12 = _interopRequireDefault(_route11);

var _route13 = require('./routes/route.groups');

var _route14 = _interopRequireDefault(_route13);

var _route15 = require('./routes/route.tasks');

var _route16 = _interopRequireDefault(_route15);

var _sessionConfig = require('./config/sessionConfig');

var _sessionConfig2 = _interopRequireDefault(_sessionConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load Project models


// load models
var app = (0, _express2.default)();

// Load Project routes


// Load Routes
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */


var port = process.env.PORT || 8080;

// Passport config
require('./config/passport')(_passport2.default);

// Mongoose connect
var mongodbUri = 'mongodb://' + _config.db.username + ':' + _config.db.password + '@ds123635.mlab.com:23635/omni-board';
try {
  _mongoose2.default.connect(mongodbUri, {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    // sets the delay between every retry (milliseconds)
    reconnectInterval: 1000
  }).then(function () {
    console.log('mongoDB connected');
  }).catch(function (err) {
    throw err;
  });
} catch (error) {
  console.log(error);
}

// const { connection } = mongoose;

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
  limit: '5mb'
}));

// Middle wares needed for passport
app.use((0, _cookieParser2.default)());

app.use((0, _expressSession2.default)({
  secret: _sessionConfig2.default.secret,
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
    message: 'login failed, try again and make sure email belong to Omnicommander'
  });
});

// Routes
app.use('/auth', _route2.default);
app.use('/api/users', _route4.default);
app.use('/api/customers', _route6.default);
app.use('/api/notes', _route8.default);
app.use('/api/folders', _route10.default);
app.use('/api/boards', _route12.default);
app.use('/api/groups', _route14.default);
app.use('/api/tasks', _route16.default);

// Serving static files
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../client/build')));
// serving html
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});

exports.default = app;