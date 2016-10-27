var express = require('express');
var router = express.Router();
var Project = require('../models/project');

router.get('/', function(req, res) {
	Project.getProjects(function(err, projects) {
		if(err) throw err;
		res.json(projects);
	})
})
.get('/:id', function(req, res) {
	var id = req.params.id;
	Project.getProjectById(id, function(err, project) {
		if (err) throw err;
		res.json(project);
	})
})

module.exports = router;
