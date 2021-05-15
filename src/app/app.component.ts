import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showDialog() {
		let modal = document.getElementById('modal_1')!
		modal.classList.remove('hhidden')
		modal.classList.add('sshow');
	}
	closeDialog() {
		let modal = document.getElementById('modal_1')!
		modal.classList.remove('sshow')
		modal.classList.add('hhidden');
	}
}
