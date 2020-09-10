import { Component, OnInit } from '@angular/core'
import { Train } from './train.model'
import { Station } from './station.model'
import { environment } from 'src/environments/environment'

@Component({
	selector: 'app-trains',
	templateUrl: './trains.component.html',
	styleUrls: ['./trains.component.scss'],
})
export class TrainsComponent implements OnInit {
	public allTrain: {}[]
	public isLoading = true
	public isWentWrong = false
	public isEmpty: boolean
	public trainId: string
	constructor() {}

	ngOnInit(): void {
		this.isLoading = true
		let userId: string
		if (sessionStorage.getItem('userId')) {
			userId = sessionStorage.getItem('userId')
		} else {
			userId = localStorage.getItem('userId')
		}
		let stations: Station[]
		fetch(environment.apiUrl + '/trains/' + userId)
			.then((res) => res.json())
			.then((json) => {
				this.allTrain = json.map((current) => {
					if (current.value.stations) {
						stations = current.value.stations
					}
					this.trainId = current.key.substring(1)
					return {
						id: this.trainId,
						train: new Train(
							current.value.name,
							current.value.imgUrl,
							current.value.pricingUrl,
							current.value.scheduleUrl,
							current.value.description,
							current.value.eventsUrl,
							current.value.actualEventsUrl,
							current.value.additionalUrl,
							stations,
							current.value.users,
						),
					}
				})
			})
			.then(() => {
				console.log(this.allTrain)
				if (this.allTrain.length > 0) {
					this.isEmpty = false
				} else {
					this.isEmpty = true
				}
				this.isLoading = false
			})
			.catch((error) => {
				console.log(error)
				this.isLoading = false
				this.isWentWrong = true
			})
	}
}
