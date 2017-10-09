import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
	selector: 'app-list-article',
	templateUrl: './list-article.component.html',
	styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
	articles: Array<any>;

	constructor(private articleService: ArticleService) {
		this.articles = new Array<any>();
	}

	ngOnInit() {
		this.articleService.subject
			.subscribe((articles: Array<any>) => this.articles = articles);
	}

	addArticle(event: MouseEvent) {
		this.articles.push({
			title: 'Article n°X',
			description: 'lalalalalala'
		});
	}

	deleteById(id: number) {
		this.articleService.delete(id);
	}

}
