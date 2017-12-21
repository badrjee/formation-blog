angular.module('Blog', ['DataService', 'ngRoute', 'MockHelper'])
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'main.html'
		}).when('/edit', {
			templateUrl: 'edit.html'
		}).when('/edit/:id', {
			templateUrl: 'edit.html'
		}).when('/contact', {
			template: '<contact-component></contact-component>'
		}).otherwise('main.html');
	})
	.run(function(MockStorage) {
		MockStorage.createInstance('articles');
	});
