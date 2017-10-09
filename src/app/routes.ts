import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes = [
	{
		path: '',
		component: ListArticleComponent
	}, {
		path: 'edit',
		component: AddArticleComponent
	}, {
		path: 'edit/:id',
		component: AddArticleComponent
	}, {
		path: 'contact',
		component: ContactComponent
	}, {
		path: '**',
		component: ErrorPageComponent
	}
];