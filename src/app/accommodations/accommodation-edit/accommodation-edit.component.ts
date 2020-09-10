import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Accommodation } from '../accommodation.model'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { environment } from 'src/environments/environment'

@Component({
	selector: 'app-accommodation-edit',
	templateUrl: './accommodation-edit.component.html',
	styleUrls: ['./accommodation-edit.component.scss'],
})
export class AccommodationEditComponent implements OnInit {
	@ViewChild('success') successElement: ElementRef

	accommodation: Accommodation
	isLoading: boolean
	isLoaded = false
	isWentWrong = false
	isEditMode: boolean
	trainId: string
	accommodationId: string
	constructor(
		private route: ActivatedRoute,
		private httpClient: HttpClient,
		private modalService: NgbModal,
	) {}

	ngOnInit(): void {
		this.isLoading = true
		this.route.paramMap.subscribe((params) => {
			this.accommodationId = params.get('accommodationId')
			this.trainId = params.get('trainId')
		})
		fetch(
			environment.apiUrl +
				'/getacc/' +
				this.trainId +
				'/' +
				this.accommodationId,
		)
			.then((res) => res.json())
			.then((json) => {
				this.accommodation = new Accommodation(
					json[0].name,
					json[0].imgUrl,
					json[0].description,
					json[0].additionalUrl,
					json[0].location,
				)
			})
			.then(() => {
				this.isLoaded = true
				this.isLoading = false
			})
			.catch((error) => {
				console.error(error)
				this.isWentWrong = true
				this.isLoading = false
			})
	}

	sendAccommodation() {
		this.httpClient
			.patch(environment.apiUrl + '/accomodations/' + this.trainId, {
				trainId: '-' + this.trainId,
				id: '-' + this.accommodationId,
				accObject: this.accommodation,
			})
			.toPromise()
			.catch((res) => {
				if (res.status === 200) {
					this.modalService.open(this.successElement, {
						windowClass: 'modal',
						backdropClass: 'modal-backdrop',
						centered: true,
						size: 'xl',
					})
				}
			})
	}
}
