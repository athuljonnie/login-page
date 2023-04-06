var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const bodyparser = require("body-parser");

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var dashBoard = require('./routes/dashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);
// app.use(router)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: true })); //responsilble for passing req in middleware

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/dashboard', dashBoard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
