import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Sight } from '../sight.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sight-edit',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sight-edit.component.html',
  styleUrls: ['./sight-edit.component.scss']
})
export class SightEditComponent implements OnInit {

  @ViewChild('success') successElement: ElementRef
  sight: Sight
  isLoading = true
  isLoaded = false
  trainId: string
  sightId: string
  isWentWrong = false
  
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params => {
        this.sightId = params.get("sightId")
        this.trainId = params.get("trainId")
      })
    )
    fetch(environment.apiUrl + '/getsight/'+ this.trainId + '/' + this.sightId)
      .then((res) => res.json())
      .then((json) => {
        this.sight = new Sight(json[0].name,json[0].imgUrl,json[0].description,json[0].additionalUrl,json[0].location)
      })
      .then(() => {
        this.isLoaded = true
        this.isLoading = false
      })
      .catch((error) => {
        console.error(error)
        this.isLoading = false
        this.isWentWrong = true
      })
  }

  sendSight(){
    this.httpClient.patch(environment.apiUrl + '/sights/' + this.trainId, {
        trainId: "-" + this.trainId,
        id: "-" + this.sightId,
        sightObject: this.sight
      }).toPromise().catch((res) => {
        if(res.status === 200) {
          this.modalService.open(this.successElement,{ windowClass: 'success-modal', backdropClass: 'success-modal-backdrop', centered: true, size: 'xl'})
        }
      })
  }

}
