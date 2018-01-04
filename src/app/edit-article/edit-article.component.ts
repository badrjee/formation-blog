import { Component, Output, EventEmitter } from '@angular/core';

import { Article } from '../article';

@Component({
	selector: 'app-edit-article',
	templateUrl: './edit-article.component.html',
	styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
	@Output() onCancel: EventEmitter<void>;
	@Output() onCreate: EventEmitter<Article>;
	article: Article;
	idCount: number;
	isDev: boolean;

	constructor() {
		this.isDev = true;
		this.idCount = 10;
		this.onCancel = new EventEmitter<void>();
		this.onCreate = new EventEmitter<Article>();
		this.article = new Article(this.idCount++);
	}

	cancel() {
		this.onCancel.emit();
	}

	submit(form) {
		// Déclancher l'événment de création :
		this.onCreate.emit(new Article(this.article));
		// Vide les champs de saisie et réinitialise le model :
		form.resetForm(new Article(this.idCount++));
		// Revenir à la liste des articles :
		// this.cancel();
	}

}
