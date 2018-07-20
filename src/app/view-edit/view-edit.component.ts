import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'blog-view-edit',
	templateUrl: './view-edit.component.html',
	styleUrls: ['./view-edit.component.css']
})
export class ViewEditComponent implements OnInit {
	article: Article;

	constructor(private articleService: ArticleService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		// FIXME: Mauvaise pratique -> subscribe dans subscribe...
		this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
			if (paramMap.has('id')) {
				let id: number = parseInt(paramMap.get('id'));
				this.articleService.read(id)
					.subscribe((article) => this.article = article);
			} else {
				this.article = undefined;
			}
		});
	}

}
