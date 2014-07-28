// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');
var AccountRouter     = require('./app/routes/api/accounts');
var ApiRouter     = require('./app/routes/api');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

// Routers
app.use('/api', ApiRouter);
app.use('/api/accounts', AccountRouter);

module.exports = app;