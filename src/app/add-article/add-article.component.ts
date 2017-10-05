import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
	selector: 'app-add-article',
	templateUrl: './add-article.component.html',
	styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
	idCount: number;
	article: Article;

	constructor(private articleService: ArticleService) {
		this.idCount = 100;
		this.article = new Article(this.idCount++);
	}

	ngOnInit() {
	}

	debug(): string {
		return JSON.stringify(this.article);
	}

	submit(): void {
		this.articleService.add(JSON.parse(JSON.stringify(this.article)));
	}

}
