import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';

import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    ListArticleComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
