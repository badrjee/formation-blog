import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	@Input() article: Article;
	@Output() onUpdate: EventEmitter<number>;

	constructor(private articleService: ArticleService) {
		this.onUpdate = new EventEmitter<number>();
	}

	ngOnInit() {
	}

	delete() {
		this.articleService.delete(this.article.id);
	}

	update() {
		this.onUpdate.emit(this.article.id)
	}

}
