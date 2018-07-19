export class Article {
private static ID_COUNT = 1;

    id: number;
    title: string;
    description: string;

    constructor(title?:string, description?:string){
        this.id = Article.ID_COUNT++;
        this.title = title;
        this.description = description;
    }
}