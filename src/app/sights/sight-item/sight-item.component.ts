import { Component, OnInit, Input } from '@angular/core';
import { Sight } from '../sight.model';

@Component({
  selector: 'app-sight-item',
  templateUrl: './sight-item.component.html',
  styleUrls: ['./sight-item.component.scss']
})
export class SightItemComponent implements OnInit {

  @Input() sight: Sight
  @Input() sightId: string
  @Input() trainId: string
  constructor() { }

  ngOnInit(): void {
  }

}
