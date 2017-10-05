import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-article',
	templateUrl: './list-article.component.html',
	styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
	articles: Array<any>;

	constructor() {
		this.articles = new Array<any>();
		this.articles.push({
			title: 'Article n°1',
			description: 'Super description...'
		},
		{
			title: 'Article n°2',
			description: 'Autre description...'
		});
	}

	ngOnInit() {
	}

	addArticle(event: MouseEvent) {
		this.articles.push({
			title: 'Article n°X',
			description: 'lalalalalala'
		});
	}

}
