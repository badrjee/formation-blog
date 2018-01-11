import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
	selector: 'app-edit-article',
	templateUrl: './edit-article.component.html',
	styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit, OnChanges {
	@Input() id: number;
	article: Article;

	constructor(private articleService: ArticleService) {
		this.article = new Article();
	}

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['id']) {
			this.loadEdit();
		}
	}

	submit(form) {
		let data = JSON.parse(JSON.stringify(this.article));
		if (this.article.id >= 0) {
			// Mise à jour.
			this.articleService.update(data)
		} else {
			// Création.
			this.articleService.create(data);
		}
		form.resetForm(new Article());
	}

	loadEdit() {
		if (this.id >= 0) {
			let read = this.articleService.read(this.id);
			this.article = JSON.parse(JSON.stringify(read));
		}
	}
}
