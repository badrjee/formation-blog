export class Article {
	id: number;
	title: string;
	description: string;
	author: string;
	date: Date;

	constructor(id?: number, title?: string, 
		description?: string, author: string = 'jérémy') {
		this.id = id;
		this.title = title;
		this.description = description;
		this.author = author;
		this.date = new Date();
	}
}
