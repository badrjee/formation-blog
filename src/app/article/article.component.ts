import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent {
	@Input() id: number;
	@Input() title: string;
	@Input() description: string;
	@Output() onDelete: EventEmitter<number>;
	@Output() onUpdate: EventEmitter<number>;

	constructor() {
		this.onDelete = new EventEmitter<number>();
		this.onUpdate = new EventEmitter<number>();
	}

	fireEventDelete(event: MouseEvent) {
		// console.log('Evénement : ', event);
		this.onDelete.emit(this.id);
	}

	fireEventUpdate() {
		this.onUpdate.emit(this.id);
	}
}
