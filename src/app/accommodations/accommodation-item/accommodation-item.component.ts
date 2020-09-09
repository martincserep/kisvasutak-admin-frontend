import { Component, OnInit, Input } from '@angular/core';
import { Accommodation } from '../accommodation.model';

@Component({
  selector: 'app-accommodation-item',
  templateUrl: './accommodation-item.component.html',
  styleUrls: ['./accommodation-item.component.scss']
})
export class AccommodationItemComponent implements OnInit {

  @Input() accommodation: Accommodation
  @Input() accommodationId: number
  @Input() trainId: number
  constructor() { }

  ngOnInit(): void {
  }

}
