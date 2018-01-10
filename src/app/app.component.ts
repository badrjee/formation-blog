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
	editArticle: Article;

	constructor(private articleService: ArticleService) {
		this.editing = false;
		this.title = 'Mon super blog NG5';
		this.version = 'v0.0.1';
		this.articles = this.articleService.articles;
		this.editArticle = new Article();
	}

	cancelEdit() {
		this.editing = false;
		this.editArticle = new Article();
	}

	deleteArticle(id: number) {
		console.log('Suppression de l\'article %s', id);
		let index = this.articles.findIndex(
			(article: Article) => article.id === id);
		if (index >= 0) {
			this.articles.splice(index, 1);
		}
	}

	showUpdateArticle(id: number) {
		let article = this.articles.find(
			(article: Article) => article.id === id);
		// Activer l'édition.
		this.editing = true;
		this.editArticle = new Article(article);
	}

	updateArticle(article: Article) {
		// Rechercher l'index de l'article dans la liste.
		let index = this.articles.findIndex(
			(a: Article) => a.id === article.id);
		if (index >= 0) {
			// Si l'index est trouvé, remplacé avec le nouvel article.
			this.articles.splice(index, 1, article);
		}
		// Réinitialiser l'article passé à EditArticleComponent.
		this.editArticle = new Article();
	}

	addArticle(article: Article) {
		this.articles.push(article);
	}
}
