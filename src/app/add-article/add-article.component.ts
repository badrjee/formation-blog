import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
	update: boolean;
	@ViewChild("addForm") addForm: NgForm;

	constructor(private articleService: ArticleService,
		private activatedRoute: ActivatedRoute,
		private router: Router) {
		this.update = false;
		this.idCount = 100;
		this.article = new Article(this.idCount++);
	}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap) => {
			if (paramMap.has('id')) {
				let editArticle = this.articleService
					.getArticleById(parseInt(paramMap.get('id')));
				if (editArticle) {
					this.update = true;
					this.article = JSON.parse(JSON.stringify(editArticle));
				}
			}
		});
	}

	debug(): string {
		return JSON.stringify(this.article);
	}

	submit(): void {
		let submitArticle: Article = JSON.parse(JSON.stringify(this.article));
		if (this.update) {
			this.articleService.update(submitArticle);
		} else {
			this.articleService.add(submitArticle);	
			this.addForm.reset(new Article(this.idCount++));
		}
	}

	backPage() {
		setTimeout(() => {
			this.router.navigate(['/']);
		});
	}
}
