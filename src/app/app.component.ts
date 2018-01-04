import { Component } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string;
	version: string;
	articles: Array<Article>;
	editing: boolean;

	constructor(private articleService: ArticleService) {
		this.editing = false;
		this.title = 'Mon super blog NG5';
		this.version = 'v0.0.1';
		this.articles = this.articleService.articles;
	}

	deleteArticle(id: number) {
		console.log('Suppression de l\'article %s', id);
		let index = this.articles.findIndex(
			(article: Article) => article.id === id);
		if (index >= 0) {
			this.articles.splice(index, 1);
		}
	}

	addArticle(article: Article) {
		this.articles.push(article);
	}
}
