import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export class BlogLibModule { }
