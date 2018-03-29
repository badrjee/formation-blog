import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticleService {
	cache: BehaviorSubject<Array<Article>>;
	idCount: number;

	constructor(private httpClient: HttpClient) {
		this.cache = new BehaviorSubject(new Array());
		this.idCount = 100;
	}

	initialize(): Observable<Array<Article>> {
		let source = this.httpClient.get<Array<Article>>('/assets/articles.json');
		let subscription = source.subscribe((list) => {
			this.cache.next(list)
			subscription.unsubscribe();
		});
		return source;
	}

	public create(article: Article): Observable<Article> {
		// Utilisation de JSON pour sérialiser puis déserialiser l'article afin
		// d'obtenir une nouvelle instance d'objet utilisant une autre adresse mémoire.
		let newArticle = JSON.parse(JSON.stringify(article));
		newArticle.id = this.idCount++;
		this.publish(newArticle, 0);
		return Observable.of(newArticle);
	}

	public update(article: Article): Observable<Article> {
		let updateArticle = JSON.parse(JSON.stringify(article));
		this.publish(updateArticle, 1);
		return Observable.of(updateArticle);
	}

	public delete(id: number): Observable<Article> {
		let deleteArticle = this.cache.value.find((a) => a.id === id);
		if (deleteArticle) {
			this.publish(deleteArticle, -1);
			return Observable.of(deleteArticle);
		} else {
			return Observable.empty();
		}
	}

	public list(): Observable<Article[]> {
		return this.cache;
	}

	private publish(article: Article, action: number) {
		let newArr = this.cache.value.slice();
		if (action === 0) {
			newArr.push(article);
		} else {
			let index = this.cache.value.findIndex((a) => a.id === article.id);
			if (action > 0) {
				newArr.splice(index, 1, article);
			} else {
				newArr.splice(index, 1);
			}
		}
		this.cache.next(newArr);
	}
}
