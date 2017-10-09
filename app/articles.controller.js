(function() {
	let appModule = angular.module('Blog');

	let ArticlesController = function($scope, $http, DataFactory) {
		this.articles;
		let successCallback = (response) => {
			this.articles = response.data || response;
		};
		let errorCallback = (response) => {
			console.error('Impossible de récupérer la '
				+ 'liste des articles (status=' + response.status + ')');
			console.log(response);
		};
		DataFactory.list().$promise.then(successCallback, errorCallback);
		// $http.get('/data.json', {})
		// $http({
		// 	url: '/data.json'
		// }).then(successCallback, errorCallback);
		$scope.$on('article-add', (event, article) => this.articles.push(article));
	};

	appModule.controller('ArticlesController', ArticlesController);
})();
