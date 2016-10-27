var mongoose = require('mongoose');

var workSchema = mongoose.Schema({
	title: {
		type: String
	},
	company: {
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

var Work = module.exports = mongoose.model('Work', workSchema);

module.exports.getWorks = function(callback) {
	Work.find(callback);
}