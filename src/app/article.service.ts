import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/Rx';

import { Article } from './article';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {
	subject: BehaviorSubject<Array<Article>>;

	constructor(private httpClient: HttpClient) {
		this.subject = new BehaviorSubject(new Array<Article>());
	}

	add(article: Article) {
		// this.httpClient.post(environment.dataUrl, article)
		// 	.subscribe((article) =>
		let current: Array<Article> = this.subject.value;
		current.push(article);
		this.subject.next(current);
		// });
	}

	list() {
		this.httpClient.get(environment.dataUrl)
			.subscribe((articles:Array<Article>) => this.subject.next(articles));
	}

	getArticleById(id: number): Article {
		return this.subject.value.find((article) => article.id === id);
	}

	update(article: Article) {
		let current: Array<Article> = this.subject.value;
		let editIndex = current
			.findIndex((listArticle) => listArticle.id === article.id);
		current.splice(editIndex, 1, article);
		this.subject.next(current);
	}

	delete(id: number) {
		let current: Array<Article> = this.subject.value;
		let editIndex = current
			.findIndex((listArticle) => listArticle.id === id);
		current.splice(editIndex, 1);
		this.subject.next(current);
	}
}
