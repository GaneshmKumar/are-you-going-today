'use strict';

var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var indexRouter = require('./app/routes/index.js');
var usersRouter = require('./app/routes/users.js');
var homeRouter = require('./app/routes/home.js');

var app = express();
require('dotenv').config({path: __dirname + '/.env'});
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URL, () => { console.log('Connected to the database...') });
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/public/views'));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));
app.use('/bower_components', express.static(process.cwd() + '/bower_components'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: 'areyougoingtoday-9876543210',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);

app.use(function(req, res, next) {
  /*var err = new Error('Not Found');
  err.status = 404;
  next(err);*/
  res.sendFile(__dirname + '/public/views/404.html');
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Server listening on port ' + port + '...');
});

module.exports = app;