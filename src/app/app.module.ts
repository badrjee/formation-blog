import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ArticleService } from './article.service';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './routes';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    ViewEditComponent,
    ViewListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
