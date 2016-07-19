var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var devForum = require('./routes/devforum');
var health = require('./routes/health');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css'),
  sourceMap: true,
  prefix: '/css'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/devforum', devForum);
app.use('/health', health);
app.use('/css', express.static(__dirname + '/node_modules/normalize.css')); // redirect Normalize.CSS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js')); // redirect JS tether
app.use('/css', express.static(__dirname + '/node_modules/tether/dist/css')); // redirect CSS tether
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
