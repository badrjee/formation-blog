import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticleService {

	constructor(private httpClient: HttpClient) { }

	public list(): Observable<Article[]> {
		return this.httpClient.get<Array<Article>>('/assets/articles.json');
	}
}
