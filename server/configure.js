var express = require('express');
var path = require('path');
var routes = require('./routes/routes');
var mongoose = require('mongoose');

module.exports = function(app) {
	mongoose.connect('mongodb://localhost/myweb');
	app.use('/', express.static(path.join(__dirname, '../public')))
	routes(app);
	return app;
}