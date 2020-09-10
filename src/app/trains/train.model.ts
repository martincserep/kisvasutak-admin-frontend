import { Station } from './station.model'

export class Train {
	public name: string
	public imgUrl: string
	public pricingUrl: string
	public scheduleUrl: string
	public description: string
	public eventsUrl: string
	public actualEventsUrl: string
	public additionalUrl: string
	public stations: Station[]
	public users: []

	constructor(
		name: string,
		imgUrl: string,
		pricingUrl: string,
		scheduleUrl: string,
		description: string,
		eventsUrl: string,
		actualEventsUrl: string,
		additionalUrl: string,
		stations: Station[],
		users: [],
	) {
		this.name = name
		this.imgUrl = imgUrl
		this.pricingUrl = pricingUrl
		this.scheduleUrl = scheduleUrl
		this.description = description
		this.eventsUrl = eventsUrl
		this.actualEventsUrl = actualEventsUrl
		this.additionalUrl = additionalUrl
		this.stations = stations
		this.users = users
	}
}
