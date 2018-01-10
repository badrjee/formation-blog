export class Article {
	id: number;
	title: string;
	description: string;

	constructor(idOrArticle?: number | Article, title?: string, description?: string) {
		if (idOrArticle instanceof Article) {
			this.id = idOrArticle.id;
			this.title = idOrArticle.title;
			this.description = idOrArticle.description;
		} else {
			this.id = idOrArticle;
			this.title = title;
			this.description = description;
		}
	}
}
