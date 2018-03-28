import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from './blog-lib/article';
import { ArticleService } from './blog-lib/article.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string;
	articles: Array<Article>;
	editing: boolean;
	editArticle: Article;

	constructor(private articleService: ArticleService) {
		this.editing = false;
		this.title = 'Better blog';
		this.articles = new Array();
	}

	ngOnInit() {
		this.articleService.list().subscribe({
			next: (articles) => {
				this.articles = articles;
			},
			error: (response) => {
				console.log('Impossible de récupérer les article dans le fichier JSON.',
					response);
			}
		});
	}

	create(article: Article) {
		this.articles.push(article);
	}

	update(article: Article) {
					// Remplacer l'article à jour dans la liste.
					let index = this.articles.findIndex(
						(value: Article) => value.id === article.id);
					this.articles.splice(index, 1, article);
	}

	addArticle() {
		this.editing = true;
		}

	backToList() {
		setTimeout(() => this.editing = false);
	}

	modify(id: number, index: number) {
		this.editArticle = this.articles[index];
		// Basculer l'affichage vers le formulaire.
		this.addArticle();
	}

	delete(id: number, index: number) {
		this.articles.splice(index, 1);
	}
}
