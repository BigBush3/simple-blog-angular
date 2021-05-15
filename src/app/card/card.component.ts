import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "../shared/shared.service";

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	posts: { id: number, title: string, text: string }[] = []
	constructor(private shared: SharedService) { }


	ngOnInit(): void {
		this.posts = this.shared.getMessage()
	}
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
