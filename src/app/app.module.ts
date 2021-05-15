import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ViewPostComponent } from './view-post/view-post.component';

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		AddCardComponent,
  ViewPostComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
