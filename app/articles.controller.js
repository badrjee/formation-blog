(function() {
	let appModule = angular.module('Blog');

	let errorCallback = (response) => {
		console.error('Impossible de récupérer la '
			+ 'liste des articles (status=' + response.status + ')');
		console.log(response);
	};

	let ArticlesController = function($scope, $http, $location, DefaultData, MockStorage) {
		this.articles;
		this.reinitialize = () => {
			DefaultData.list().$promise.then((response) => {
				let articles = response.data || response;
				this.factory.reinitialize();
				articles.forEach((article) => this.factory.create(article));
			}, errorCallback);
			// Autres exemples pour récupérer le JSON sans DefaultData qui utilise le module 'ngResource'.
			// $http.get('/data.json', {}).then(successCallback, errorCallback);
			// $http({url: '/data.json'}).then(successCallback, errorCallback);
		};
		this.delete = (id) => {
			if (this.factory.delete(id)) {
				// Message success
			} else {
				// Message failed.
			}
		};
		this.edit = (id) => {
			$location.path('edit/' + id);
		};
		MockStorage.getInstance('articles').then((factory) => {
			this.factory = factory;
			this.articles = factory.list();
		});
	};

	appModule.controller('ArticlesController', ArticlesController);
})();
