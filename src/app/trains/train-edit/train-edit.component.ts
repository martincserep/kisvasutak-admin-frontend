import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Train } from '../train.model'
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router'
import { Station } from '../station.model'
import { Plus } from 'ngx-bootstrap-icons'
import { HttpClient } from '@angular/common/http'
import { Location } from 'src/app/shared/location.model'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { environment } from 'src/environments/environment'

@Component({
	selector: 'app-train-edit',
	templateUrl: './train-edit.component.html',
	styleUrls: ['./train-edit.component.scss'],
})
export class TrainEditComponent implements OnInit {
	train: Train
	trainId: string
	isLoading = true
	isLoaded = false
	isWentWrong = false
	newStationName = ''
	newStationLat = null
	newStationLng = null
	stationError = {
		hasError: false,
		message: '',
	}
	constructor(
		private route: ActivatedRoute,
		private httpClient: HttpClient,
		private modalService: NgbModal,
	) {}

	@ViewChild('success') successElement: ElementRef
	ngOnInit(): void {
		this.isLoading = true
		this.route.paramMap.subscribe((params) => {
			this.trainId = params.get('id')
		})
		let stations: Station[]
		fetch(environment.apiUrl + '/gettrain/' + this.trainId)
			.then((res) => res.json())
			.then((json) => {
				if (json[1].stations != undefined) {
					stations = json[1].stations
				}
				this.train = new Train(
					json[1].name,
					json[1].imgUrl,
					json[1].pricingUrl,
					json[1].scheduleUrl,
					json[1].description,
					json[1].eventsUrl,
					json[1].actualEventsUrl,
					json[1].additionalUrl,
					stations,
					json[1].users,
				)
			})
			.then(() => {
				this.isLoaded = true
				this.isLoading = false
			})
			.catch((error) => {
				console.log(error)
				this.isLoading = false
				this.isWentWrong = true
			})
	}

	sendTrain() {
		this.httpClient
			.patch(environment.apiUrl + '/trains/' + this.trainId, {
				id: '-' + this.trainId,
				trainObject: this.train,
			})
			.toPromise()
			.catch((res) => {
				if (res.status === 200) {
					this.modalService.open(this.successElement, {
						windowClass: 'success-modal',
						backdropClass: 'success-modal-backdrop',
						centered: true,
						size: 'xl',
					})
				}
			})
	}
	removeFromStations(stationName) {
		this.train.stations.forEach((current) => {
			if (current.name === stationName) {
				let index = this.train.stations.indexOf(current)
				this.train.stations.splice(index, 1)
			}
		})
	}

	addStation() {
		if (
			this.newStationName.length > 2 &&
			this.newStationLat !== null &&
			this.newStationLng !== null
		) {
			this.train.stations.push(
				new Station(
					this.newStationName,
					new Location(this.newStationLat, this.newStationLng),
				),
			)
			console.log(this.newStationLat, this.newStationLng)
			this.newStationName = ''
			this.newStationLat = null
			this.newStationLng = null
			this.stationError = {
				hasError: false,
				message: '',
			}
		} else {
			this.stationError = {
				hasError: true,
				message: 'Minden mezőt ki kell töltened!',
			}
		}
	}
}
