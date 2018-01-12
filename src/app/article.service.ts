import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { Article } from './article';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {
	articles: BehaviorSubject<Array<Article>>;
	apiUrl: string;
	headers: HttpHeaders;

	constructor(private httpClient: HttpClient) {
		this.articles = new BehaviorSubject([]);
		this.apiUrl = environment.apiUrl + '/article';
		this.headers = new HttpHeaders({
			'Access-Control-Allow-Origin': '*'
		});
	}

	initialize() {
		this.httpClient.get(this.apiUrl,
			{ headers: this.headers}).subscribe(
			(list: Array<Article>) => this.articles.next(list));
	}

	create(article: Article) {
		this.httpClient.post(this.apiUrl, article,
		{ headers: this.headers}).subscribe(
			(newArticle: Article) => {
				let tmp = this.articles.value;
				tmp.push(newArticle);
				this.articles.next(tmp);
			});
	}

	read(id: number): Article {
		return this.articles.value.find((a: Article) => a.id === id);
	}

	update(article: Article) {
		this.httpClient.post(this.apiUrl, article,
			{ headers: this.headers}).subscribe(
			(newArticle: Article) => {
				let tmp = this.articles.value;
				let index = tmp.findIndex(
					(a: Article) => a.id === newArticle.id);
				if (index >= 0) {
					tmp.splice(index, 1, newArticle);
					this.articles.next(tmp);
				}
			});
	}

	delete(id: number) {
		this.httpClient.delete(this.apiUrl + '/' + id,
			{ headers: this.headers}).subscribe(() => {
			let tmp = this.articles.value;
			let index = tmp.findIndex(
				(a: Article) => a.id === id);
			if (index >= 0) {
				tmp.splice(index, 1);
				this.articles.next(tmp);
			}
		});
	}
}
