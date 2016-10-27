var express = require('express');
var router = express.Router();
var Education = require('../models/education');

router.get('/', function(req, res) {
	Education.getEducations(function(err, educations) {
		if (err) throw err;
		res.json(educations);
	})
})

module.exports = router;