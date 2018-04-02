import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
	selector: 'blog-article-edit',
	templateUrl: './article-edit.component.html',
	styleUrls: ['./article-edit.component.css']
})
/* Commande utilisée pour générer le composant dans le module BlogLib :
 * ng generate component blog-lib/article-edit
 * 
 * Ce component a pour rôle l'affichage et la gestion des actions sur
 * un formulaire HTML permettant de créer ou modifier un article.
 * 	- Input : 'editArticle' l'object Article à pré-remplir dans le formulaire
 * 	si nécessaire
 *  - Output : 'onCreate' l'événement pour gérer l'action "nouvel article et enregistré"
 *  - Output : 'onUpdate' l'événement pour gérer l'action "article modifié et enregistré"
 */
export class ArticleEditComponent {
	@Input() article: Article;
	@Output() onCreate: EventEmitter<Article>;
	@Output() onUpdate: EventEmitter<Article>;
	private editArticle: Article;

	constructor(private articleService: ArticleService) {
		this.editArticle = new Article();
		this.onCreate = new EventEmitter();
		this.onUpdate = new EventEmitter();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.article && this.article) {
			this.editArticle = JSON.parse(JSON.stringify(this.article));
		} else {
			this.editArticle = new Article();
		}
	}

	saveArticle(myForm: NgForm) {
		let article = JSON.parse(JSON.stringify(this.editArticle));
		// Si l'id est présent, alors l'article existe déjà.
		if (this.editArticle.id >= 0) {
			// Evénement de mise à jour.
			this.onUpdate.emit(article);
		} else {
			// Evénement de création.
			this.onCreate.emit(article)
		}
		// Le champ 'id' ne peut pas être modifié par resetForm() car
		// il n'est pas utilisé par ngModel dans la template HTML.
		this.editArticle.id = undefined;
		myForm.resetForm();
	}

}
