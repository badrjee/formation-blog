(function() {
	let serviceModule = angular.module('DataService', ['ngResource']);

	serviceModule.factory('DataFactory', function($resource) {
		return $resource('/:articleId', { articleId: '@id'}, {
			list: {
				url: '/data.json',
				method: 'GET',
				isArray: true
			}
		});
	});
})();
