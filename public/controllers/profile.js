var myApp = angular.module('myApp');

myApp.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('ProfileCtrl loading...');

	$scope.getProfile = function() {
		$http.get('/api/profile').success(function(response) {
			$scope.profile = response[0];
		})
		.error(function(err) {
			console.log('error:', err.message);
		});
	}

	$scope.getWorks = function() {
		$http.get('/api/works').success(function(response) {
			$scope.works = response;
		})
		.error(function(err) {
			console.log('error:', err.message);
		})
	}

	$scope.getEducations = function() {
		$http.get('/api/educations').success(function(response) {
			$scope.educations = response;
		})
		.error(function(err) {
			console.log('error:', err.message);
		})
	}

}]);