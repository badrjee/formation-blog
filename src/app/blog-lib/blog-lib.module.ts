import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleService } from './article.service';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule
	],
	declarations: [
		NavbarComponent,
		ArticleEditComponent,
		ArticleComponent
	],
	exports: [
		NavbarComponent,
		ArticleEditComponent,
		ArticleComponent,
		FormsModule,
		HttpClientModule
	],
	providers: [
		ArticleService
	]
})
export class BlogLibModule { }
