export class Accommodation {
	public name: string
	public imgUrl: string
	public description: string
	public additionalUrl: string
	public location: {
		lat: number
		lng: number
	}

	constructor(
		name: string,
		imgUrl: string,
		description: string,
		additionalUrl: string,
		location: { lat: number; lng: number },
	) {
		this.name = name
		this.imgUrl = imgUrl
		this.description = description
		this.additionalUrl = additionalUrl
		this.location = location
	}
}
