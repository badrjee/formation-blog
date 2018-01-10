import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../article';

@Component({
	selector: 'app-edit-article',
	templateUrl: './edit-article.component.html',
	styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
	@Input() article: Article;
	@Output() onCancel: EventEmitter<void>;
	@Output() onCreate: EventEmitter<Article>;
	@Output() onUpdate: EventEmitter<Article>;
	idCount: number;
	isDev: boolean;

	constructor() {
		this.isDev = true;
		this.idCount = 10;
		this.onCancel = new EventEmitter<void>();
		this.onCreate = new EventEmitter<Article>();
		this.onUpdate = new EventEmitter<Article>();
		this.article = new Article();
	}

	cancel() {
		this.onCancel.emit();
	}

	submit(form) {
		if (this.article.id >= 0) {
			// Déclancher l'événement de mise à jour.
			this.onUpdate.emit(new Article(this.article));
		} else {
			// Déclancher l'événment de création :
			this.article.id = this.idCount++;
			this.onCreate.emit(new Article(this.article));
		}
		// Vide les champs de saisie et réinitialise le model :
		form.resetForm(new Article());
		// Revenir à la liste des articles :
		// this.cancel();
	}

}
