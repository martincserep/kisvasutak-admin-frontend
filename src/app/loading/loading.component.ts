import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
	constructor(private spinner: NgxSpinnerService) {}

	ngOnInit(): void {
		this.spinner.show('sp6')
	}
}
