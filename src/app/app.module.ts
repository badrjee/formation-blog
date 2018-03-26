import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlogLibModule } from './blog-lib/blog-lib.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BlogLibModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
