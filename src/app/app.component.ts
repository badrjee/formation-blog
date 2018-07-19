import { Component, OnInit } from '@angular/core';
import { Article } from './aticle';
import { ArticleService } from './article.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string;
	articles: Array<Article>;
	showList: boolean;
	editArticle: Article;

	constructor(private articleService: ArticleService) {
		this.showList = true;
		this.title = 'Bienvenue sur mon blog réalisé avec Angular 6.0.3 !';
		this.articles = new Array();
	}

	ngOnInit(){
		this.articleService.list().subscribe((list) => this.articles=list);
	}

	handleCreate(article: Article) {
		this.articleService.create(article)
		.subscribe({
			next:(newArticle) => console.log(`Article ${newArticle} créé!`),
			error:(errorMessage) => console.log(`Impossible de crée l'article ${article}: ${errorMessage}`), 
			complete:() => console.log("creation du nouvel article terminée avec succés !")
		})
		this.showList = true;
	}

	handleDelete(id: number) {
		this.updateList(id);
	}

	handleUpdate(article: Article) {
		this.updateList(article.id, article);
		this.editArticle = undefined;
		this.showList = true;
	}

	showEdit(id: number) {
		this.editArticle = this.articles.find((a) => a.id === id);
		this.showList = false;
	}

	private updateList(id: number, article?: Article) {
		let index = this.articles.findIndex((truc) => truc.id === id);
		if (index >= 0) {
			if (article) {
				this.articles.splice(index, 1, article);
			} else {
				this.articles.splice(index, 1);
			}
		}
	}
}