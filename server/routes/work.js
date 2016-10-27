var express = require('express');
var router = express.Router();
var Work = require('../models/work');

router.get('/', function(req, res) {
	Work.getWorks(function(err, works) {
		if (err) throw err;
		res.json(works);
	});
})

module.exports = router;
