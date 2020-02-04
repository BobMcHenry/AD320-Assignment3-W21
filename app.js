const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); //--middleware

//---Import all router
const indexRouter = require('./routes/index');
const colorsRouter = require('./routes/colors');
const carsRouter = require('./routes/cars');
const appsRouter = require('./routes/apps');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/colors', colorsRouter);
app.use('/cars', carsRouter);
app.use('/apps', appsRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);

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
