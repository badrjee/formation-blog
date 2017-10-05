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
  	this.articleService.add({
			id: 0,
		title: 'Article n°1',
		description: 'Super description...'
	});
	this.articleService.add({
		id: 1,
		title: 'Article n°2',
		description: 'Autre description...'
	});
  }
}
