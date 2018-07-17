import { Component } from '@angular/core';
import { Article } from './aticle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  articles : Array<Article>;
  

  constructor(){
    this.title = 'WELCOM TO THE BLOG RELEASE ANGULAR 6.0.3 !!!';
    this.articles= new Array();

}

handleCreate(article: Article){
  this.articles.push(article)
  console.log("Un Article à été bien ajouter !", article)
}
}
