import { Component, OnInit } from '@angular/core';
import { Sight } from './sight.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html',
  styleUrls: ['./sights.component.scss']
})
export class SightsComponent implements OnInit {

  public allSight: {}[]
  public isLoading: boolean
  public isLoaded: boolean
  public isWentWrong: boolean
  public isEmpty: boolean
  public trainId: string
  public sightId: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true
    let items = new Array()
    this.route.paramMap.subscribe(
      (params => {
        this.trainId = params.get("id")
      })
    )
    fetch(environment.apiUrl + '/allsights/' +  this.trainId)
      .then((res) => res.json())
      .then((json) => {
        json.forEach(element => {
          if(element[0]){

          } else {

              Object.keys(element).map(item=> {
                  items.push({"key": item, "value": element[item]});
              })
          }
      });

        this.allSight = Object.keys(items).map(item => {
          let current = {"key": item, "value": items[item]}
          return ({trainId: this.trainId, sightId: current.value.key.substring(1), sight: new Sight(current.value.value.name, current.value.value.imgUrl, current.value.value.description, current.value.value.additionalUrl, {...current.value.value.location})})
        })
      })
      .then(() => {
        if (this.allSight.length > 0) {
          this.isEmpty = false
        } else {
          this.isEmpty = true
        }
        this.isLoading = false
      })
      .catch(() => {
        this.isLoading = false
        this.isWentWrong = true
      })
  }

}
