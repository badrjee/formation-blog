import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from './blog-lib/article';
import { ArticleService } from './blog-lib/article.service';
import {
	NAV_LIST,
	NAV_CREATE,
	NAV_CONTACT,
	NAV_HOME
} from './blog-lib/navbar/navbar.component';

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
		this.editArticle = new Article();
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

	showForm() {
		this.editing = true;
	}

	backToList() {
		setTimeout(() => this.editing = false);
	}

	modify(id: number, index: number) {
		this.editArticle = this.articles[index];
		// Basculer l'affichage vers le formulaire.
		this.showForm();
	}

	delete(id: number, index: number) {
		this.articles.splice(index, 1);
	}

	nav(path: string) {
		if (path === NAV_HOME || path === NAV_LIST) {
			this.backToList();
		} else if (path === NAV_CREATE) {
			this.showForm()
		} else if (path === NAV_CONTACT) {
			window.alert('No contact page yet... Coming soon sorry !');
		} else {
			console.error('Navigation path %s not managed by ion-blog...', path);
		}
	}
}
