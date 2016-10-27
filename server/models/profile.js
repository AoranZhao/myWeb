var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	lname: {
		type: String
	},
	fname: {
		type: String
	},
	pictureUrl: {
		type: String
	},
	description: {
		type: String
	},
	phone: {
		type: String
	},
	skills: {
		type: [{
			skill: {
				type: String
			},
			score: {
				type: Number
			}
		}]
	},
	work: {
		type: Array
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);

module.exports.getProfile = function(callback) {
	Profile.find(callback).limit(1);
};