var express = require('express');
var router = express.Router();
var Profile = require('../models/profile');

router.get('/', function(req, res) {
	Profile.getProfile(function(err, profile) {
		if (err) throw err;
		res.json(profile);
	})
});

module.exports = router;