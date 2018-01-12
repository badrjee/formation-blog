import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title:string;
	version: string;
	editing: boolean;
	articles: Array<Article>;
	editId: number;

	constructor(private articleService: ArticleService) {
		this.title = 'BetterBlog with RxJs !'; 
		this.version = 'v0.1.0';
		this.editing = false;
		this.articles = new Array<Article>();
		this.articleService.articles.subscribe(
			(articles: Array<Article>) => {
				this.articles = articles;
				this.editing = false;
				this.editId = undefined;
			});
	}

	ngOnInit() {
		this.articleService.initialize();
	}

	showUpdate(id: number) {
		this.editId = id;
		this.editing = true;
	}
}
