import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../article';

@Component({
	selector: 'blog-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
/* Commande utilisée pour générer le composant dans le module BlogLib :
 * ng generate component blog-lib/article
 * 
 * Ce component a pour rôle l'affichage et la gestion des actions sur un article.
 * 	- Input : 'article' l'object Article à gérer
 *  - Output : 'onModify' l'événement pour gérer l'action "modifier l'article"
 *  - Output : 'onDelete' l'événement pour gérer l'action "supprimer l'article"
 */
export class ArticleComponent {
	@Input() article: Article;
	@Output() onModify: EventEmitter<number>;
	@Output() onDelete: EventEmitter<number>;

	constructor() {
		this.onModify = new EventEmitter();
		this.onDelete = new EventEmitter();
	}

	deleteArticle(id: number) {
		this.onDelete.emit(id);
	}

	modifyArticle(id: number) {
		this.onModify.emit(id);
	}
}
