import { Injectable } from '@angular/core';

import { Article } from './article';

@Injectable()
export class ArticleService {
	articles: Array<Article>;

	constructor() {
		this.articles = new Array<Article>();
		this.articles.push(new Article(0, 'Article n°1',
			'Angular CLI c\'est pratique !'));
		this.articles.push(new Article(1, 'Article n°2',
			'C\'est mieux quand y\'a pas de config à écrire !'));
	}

}
