/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import 'babel-core/register';
import 'babel-polyfill';
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import { db } from './config/config';

// load models
import './models/User';
import './models/Customer';
import './models/Notification';
import './models/Note';
// load Project models
import './models/Folder';
import './models/Task';
import './models/Group';
import './models/Board';
import './models/Column';

// Load Routes
import authRoute from './routes/route.auth';
import usersRoute from './routes/route.users';
import customersRoute from './routes/route.customers';
import notesRoute from './routes/route.notes';

// Load Project routes
import foldersRoute from './routes/route.folders';
import boardsRoute from './routes/route.boards';
import groupsRoute from './routes/route.groups';
import tasksRoute from './routes/route.tasks';
import sessionConfig from './config/sessionConfig';

const app = express();

const port = process.env.PORT || 8080;


// Passport config
require('./config/passport')(passport);

// Mongoose connect
const mongodbUri = `mongodb://${db.username}:${
  db.password
}@ds123635.mlab.com:23635/omni-board`;
mongoose
  .connect(mongodbUri, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch((err) => {
    throw err;
  });

const { connection } = mongoose;

// Cors middleware
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Compression Middleware
app.use(compression());
app.use(cors(corsOptions));
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  }),
);

// parse application/json
app.use(
  bodyParser.json({
    extended: true,
    limit: '50mb',
  }),
);

// Middle wares needed for passport
app.use(cookieParser());

app.use(
  session({
    secret: sessionConfig.secret,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/loginError', (req, res) => res.json({
  success: false,
  message:
      'login failed, try again and make sure email belong to Omnicommander',
}));

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
app.use(express.static(path.resolve(__dirname, '../client/build')));
// serving html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
