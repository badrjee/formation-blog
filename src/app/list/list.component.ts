import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article} from '../aticle';

@Component({
	selector: 'blog-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent {
	@Input() articles: Array<Article>;
	@Output() onDelete: EventEmitter<number>;
	@Output() onEdit: EventEmitter<number>;

	constructor() {
		this.onDelete = new EventEmitter();
		this.onEdit = new EventEmitter();
	}

	delete(article: Article) {
		if (article && article.id != null) {
			this.onDelete.emit(article.id);
		}
	}

	edit(article: Article) {
		if (article && article.id != null) {
			this.onEdit.emit(article.id);
		}
	}

}
