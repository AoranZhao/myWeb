var myApp = angular.module('myApp');

myApp.controller('ProjectCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	console.log('ProjectCtrl loading...');

	$scope.getProjects = function() {
		$http.get('/api/projects').success(function(response) {
			$scope.projects = response;
			$scope.project = response[0];
		})
		.error(function(err) {
			console.log('error:', err.message);
		})
	}

	$scope.getProject = function() {
		var id = $routeParams.id;
		$http.get('/api/projects/' + id).success(function(response) {
			$scope.project = response;
		})
	}

	$scope.getProjectById = function(id) {
		$http.get('/api/projects/' + id).success(function(response) {
			$scope.project = response;
		})
	}

}])