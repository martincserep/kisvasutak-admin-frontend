import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../train.model';

@Component({
  selector: 'app-train-item',
  templateUrl: './train-item.component.html',
  styleUrls: ['./train-item.component.scss']
})
export class TrainItemComponent implements OnInit {

  @Input() train: Train;
  @Input() trainId: string;
  constructor() { 
    console.log(this.trainId)
  }

  ngOnInit(): void {
  }

}
