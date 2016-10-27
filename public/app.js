var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'ProfileCtrl',
		templateUrl: 'partials/aboutMe.html'
	})
	.when('/aboutMe', {
		controller: 'ProfileCtrl',
		templateUrl: 'partials/aboutMe.html'
	})
	.when('/projects', {
		controller: 'ProjectCtrl',
		templateUrl: 'partials/projects.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})