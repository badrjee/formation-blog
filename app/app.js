(function() {
	// Création d'un module angular
	let appModule = angular.module('Blog', ['DataService', 'ngRoute']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'main.html'
		}).when('/edit', {
			templateUrl: 'edit.html'
		}).when('/contact', {
			template: 'TEST<contact-component></contact-component>'
		}).otherwise('main.html');
	});

	let ContactController = function() {

	};

	appModule.component('contactComponent', {
		templateUrl: 'contact.html',
		controller: ContactController
	})
})();
