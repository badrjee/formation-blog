import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticleService {
	idCount: number;

	constructor(private httpClient: HttpClient) {
		this.idCount = 100;
	}

	public create(article: Article): Observable<Article> {
		// Utilisation de JSON pour sérialiser puis déserialiser l'article afin
		// d'obtenir une nouvelle instance d'objet utilisant une autre adresse mémoire.
		let newArticle = JSON.parse(JSON.stringify(article));
		newArticle.id = this.idCount++;
		return Observable.of(newArticle);
	}

	public update(article: Article): Observable<Article> {
		return Observable.of(JSON.parse(JSON.stringify(article)));
	}

	public list(): Observable<Article[]> {
		return this.httpClient.get<Array<Article>>('/assets/articles.json');
	}
}
