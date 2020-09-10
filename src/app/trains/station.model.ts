import { Location } from '../shared/location.model'

export class Station {
	public name: string
	public location: Location

	constructor(name: string, location: Location) {
		this.name = name
		this.location = location
	}
}
