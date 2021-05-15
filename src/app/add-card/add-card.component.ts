import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedService } from "../shared/shared.service";



@Component({
	selector: 'app-add-card',
	templateUrl: './add-card.component.html',
	styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
	posts: { id: number, title: string, text: string }[] = []
	text: string = '';
	title: string = '';
	constructor(private shared: SharedService, private el: ElementRef) {
	}

	ngOnInit(): void {
		this.el.nativeElement.querySelector('.mmodal-background').addEventListener('click', () => {
			console.log(this.el.nativeElement)
			this.close()
		})
		this.el.nativeElement.classList.add('hhidden')
	}

	close() {
		this.el.nativeElement.classList.remove('sshow')
		this.el.nativeElement.classList.add('hhidden')
	}
	addPost() {
		if (this.text === '' && this.title === '') {
			alert('Вы не заполнили ни одного поля')
		}
		else if (this.text === '') {
			alert('Вы не заполнили поле записи')
		}
		else if (this.title === '') {
			alert('Вы не заполнили заголовок записи')
		} else {
			this.shared.setMessage({ id: this.shared.getMessage().length, title: this.title, text: this.text });
			this.close()
			this.text = ''
			this.title = ''
		}
	}

}
