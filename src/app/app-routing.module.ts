import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component'
import { CardComponent } from './card/card.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
	{ path: '', component: CardComponent },
	{ path: 'view/:id', component: ViewPostComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
