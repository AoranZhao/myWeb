var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	name: {
		type: String
	},
	git: {
		type: String
	},
	description: {
		type: String
	},
	technique: {
		type: Array
	},
	imgUrl: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Project = module.exports = mongoose.model('Project', projectSchema);

module.exports.getProjects = function(callback) {
	Project.find(callback);
}

module.exports.getProjectById = function(id, callback) {
	Project.findById(id, callback);
}