import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/Rx';

import { Article } from './article';

@Injectable()
export class ArticleService {
	subject: BehaviorSubject<Array<Article>>;

	constructor() {
		this.subject = new BehaviorSubject(new Array<Article>());
	}

	add(article: Article) {
		let current: Array<Article> = this.subject.value;
		current.push(article);
		this.subject.next(current);
	}
}
