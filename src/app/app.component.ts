import { Component } from '@angular/core';

import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
  	this.articleService.list();
  }
}
