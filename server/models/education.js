var mongoose = require('mongoose');

var educationSchema = mongoose.Schema({
	title: {
		type: String
	},
	school: {
		type: String
	},
	description: {
		type: String
	},
	start: {
		type: Date
	},
	end: {
		type: Date
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Education = module.exports = mongoose.model('Education', educationSchema);

module.exports.getEducations = function(callback) {
	Education.find(callback);
}