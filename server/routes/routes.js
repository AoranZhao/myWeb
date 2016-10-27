var profile = require('./profile');
var work = require('./work');
var education = require('./education');
var project = require('./project');

module.exports = function(app) {
	app.use('/api/profile', profile);
	app.use('/api/works', work);
	app.use('/api/educations', education);
	app.use('/api/projects', project);
}