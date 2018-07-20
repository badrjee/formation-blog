import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string;
	showList: boolean;
	editArticle: Article;

	constructor(private articleService: ArticleService) {
		this.showList = true;
		this.title = 'Bienvenue sur mon blog réalisé avec Angular 6.0.3 !';
		
	}

	ngOnInit() {
	}

	handleCreate(article: Article) {
		this.articleService.create(article)
			.subscribe({
				next: (newArticle) => console.log(`Article ${newArticle} créé !`),
				error: (errorMessage) => console.log(`Impossible de créer l'article ${article} : ${errorMessage}`),
				complete: () => console.log('Création du nouvel article terminée avec succès !')
			});
		this.showList = true;
	}

	handleUpdate(article: Article) {
		this.articleService.update(article)
			.subscribe({
				complete: () => {
					console.log(`Article d'id ${article.id} mis à jour avec succès`);
					this.editArticle = undefined;
					this.showList = true;
				},
				error: (message) => console.log(`Impossible de mettre à jour l'article : ${message}`)
			});
	}
}