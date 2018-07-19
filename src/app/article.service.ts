import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../node_modules/rxjs';
import { Article } from './aticle';
import { HttpClient } from '@angular/common/http';
import { environment as ENV} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private subject: BehaviorSubject<Array<Article>>;
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.subject = new BehaviorSubject(new Array());
    this.apiUrl = ENV.apiUrl + '/article'
   }

  get articles(): Observable<Array<Article>>{
    return this.subject.asObservable();
  }

  loadMock(){
    this.httpClient.get<Array<Article>>(ENV.mockUrl)
    .subscribe((list)=>{this.subject.next(list);});
  }

  //crud service


  list(): Observable<Array<Article>>{
    this.httpClient.get<Array<Article>>(this.apiUrl)
    .subscribe((list) => this.subject.next(list))
    return this.articles;
  }

  create(article:Article): Observable<Article>{
    return null;

  }

  read(id:number): Observable<Article>{
    return null;
  }

  update(article:Article): Observable<Article>{
    return null;
  }

  delete(id:number): Observable<boolean>{
    return null;
  }
  
}
