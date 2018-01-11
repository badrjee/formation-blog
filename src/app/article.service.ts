import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticleService {
	articles: BehaviorSubject<Array<Article>>;
	idCount: number;

	constructor() {
		this.articles = new BehaviorSubject([]);
		this.idCount = 10;
	}

	create(article: Article) {
		let tmp = this.articles.value;
		article.id = this.idCount++;
		tmp.push(article);
		this.articles.next(tmp);
	}

	read(id: number): Article {
		return this.articles.value.find((a: Article) => a.id === id);
	}

	update(article: Article) {
		let tmp = this.articles.value;
		let index = tmp.findIndex(
			(a: Article) => a.id === article.id);
		if (index >= 0) {
			tmp.splice(index, 1, article);
			this.articles.next(tmp);
		}
	}

	delete(id: number) {
		let tmp = this.articles.value;
		let index = tmp.findIndex(
			(a: Article) => a.id === id);
		if (index >= 0) {
			tmp.splice(index, 1);
			this.articles.next(tmp);
		}
	}
}
