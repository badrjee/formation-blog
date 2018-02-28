import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from './article';

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

	constructor() {
		this.editing = false;
		this.editArticle = new Article(0, '');
		this.title = 'Better blog';
		this.articles = new Array();
		this.articles.push(new Article(99, 'Article de test', 
			'Super description...'));
	}

	addArticle() {
		this.editing = true;
	}

	backToList() {
		setTimeout(() => this.editing = false);
	}

	saveArticle(myForm: NgForm) {
		// Utilisation de JSON pour sérialiser puis déserialiser l'article afin
		// d'obtenir une nouvelle instance d'objet utilisant une autre adresse mémoire.
		this.articles.push(JSON.parse(JSON.stringify(this.editArticle)));
		myForm.resetForm();
	}
}
