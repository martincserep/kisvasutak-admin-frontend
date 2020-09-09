import { Component, OnInit } from '@angular/core';
import { Accommodation } from './accommodation.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {
  isLoading = true
  isEmpty = false
  isWentWrong = false
  trainId: string
  accommodationId: string
  public allAccommodation: {}[]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true
    let items = new Array()
    this.route.paramMap.subscribe(
      (params => {
        this.trainId = params.get("id")
      })
    )
    fetch(environment.apiUrl + '/allaccomodations/' +this.trainId)
    .then((res) => res.json())
    .then((json) => {
      json.forEach(element => {
        if(element[0]) {

        } else {
          Object.keys(element).map(item => {
            items.push({"key": item, "value": element[item]})
          })
        }
      })
      this.allAccommodation = Object.keys(items).map(item => {
        let current = {"key": item,  "value": items[item]}
        return {trainId: this.trainId, id: current.value.key.substring(1), accommodation: new Accommodation(current.value.value.name, current.value.value.imgUrl, current.value.value.description, current.value.value.additionalUrl, current.value.value.location)}
      })
    })
    .then(() => {
      if (this.allAccommodation.length > 0) {
        this.isEmpty = false
      } else {
        this.isEmpty = true
      }
      this.isLoading = false
    })
    .catch((error) => {
      console.error(error)
      this.isLoading = false
      this.isWentWrong = true
    })
  }

}
