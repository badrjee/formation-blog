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
		// Initialize charge le fichier JSON et envoie les données une seule fois !
		// On l'utilise donc maintenant uniquement pour vérifier une erreur du chargement initial.
		this.articleService.initialize().subscribe({
			// L'inscription à 'next' est inutile car déjà gérée par l'appel à list().
			// next: (articles) => {
			// 	this.articles = articles;
			// },
			error: (response) => {
				console.log('Impossible de récupérer les article dans le fichier JSON.',
					response);
			}
		});
		// Pour gérer le maintient de la liste à jour il faut donc s'inscrire à list().
		this.articleService.list().subscribe((articles) => this.articles = articles);
	}

	create(article: Article) {
		this.articleService.create(article);
	}

	update(article: Article) {
		// Remplacer l'article à jour dans la liste.
		this.articleService.update(article);
	}

	showForm(article?: Article) {
		this.editArticle = article;
		this.editing = true;
	}

	backToList() {
		setTimeout(() => this.editing = false);
	}

	modify(id: number, index: number) {
		// Basculer l'affichage vers le formulaire.
		this.showForm(this.articles[index]);
	}

	delete(id: number, index: number) {
		this.articleService.delete(id);
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
