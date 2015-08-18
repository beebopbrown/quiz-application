// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

// Routes
var routes = require('./routes/index');

// Express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Allow express to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Allow body-parser to parse Request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handle all routes
app.use('/', routes);

// Export app
module.exports = app;
