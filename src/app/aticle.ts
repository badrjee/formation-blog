export class Article {
private static ID_COUNT = 1;

    id: number;
    title: string;
    content: string;

    constructor(title?:string, content?:string){
        this.id = Article.ID_COUNT++;
        this.title = title;
        this.content = content;
    }
}