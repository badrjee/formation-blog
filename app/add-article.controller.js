(function() {
	let appModule = angular.module('Blog');

	let AddArticleController = function($rootScope) {
		this.idCount = 100;
		this.article = {
			id: this.idCount++
		};
		this.submit= function() {
			// Passer le nouvel article à ArticlesController
			// $broadcast génère un événement "vers le bas".
			$rootScope.$broadcast('article-add', JSON.parse(JSON.stringify(this.article)));
			this.article = {
				id: this.idCount++
			};
		}
	};

	appModule.controller('AddArticleController', AddArticleController);
})();
