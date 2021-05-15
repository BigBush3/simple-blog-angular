import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SharedService } from "../shared/shared.service";

@Component({
	selector: 'app-view-post',
	templateUrl: './view-post.component.html',
	styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
	id: any;
	post: any;
	isConfirm: boolean = false;
	constructor(private route: ActivatedRoute, private shared: SharedService, private router: Router) { }

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id')
		this.post = this.shared.getMessage()
	}

	deletePost() {
		this.isConfirm = confirm('Вы точно хотите удалить этот пост?')
		if (this.isConfirm) {
			this.shared.deleteMessage(this.id)
			this.router.navigateByUrl('')
		} else {
			return
		}
	}

}
