(function() {
	let appModule = angular.module('Blog');

	let AddArticleController = function($rootScope, $routeParams, $location, MockStorage) {
		MockStorage.getInstance('articles').then((factory) => {
			this.factory = factory;
			if ($routeParams.id) {
				this.article = this.factory.read(parseInt($routeParams.id));
			}
		});
		this.article = {};
		this.submit= function() {
			let data = JSON.parse(JSON.stringify(this.article));
			if (this.article.id) {
				this.factory.update(data);
			} else {
				this.factory.create(data);
			}
			$location.path('/');
		}
	};

	appModule.controller('AddArticleController', AddArticleController);
})();
