import {Component, Input, OnInit} from '@angular/core';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {Concurs} from '../../../../shared/model/Concurs';

@Component({
  selector: 'app-bikepark-message',
  templateUrl: './bikepark-message.component.html',
  styleUrls: ['./bikepark-message.component.scss']
})
export class BikeparkMessageComponent implements OnInit {

  @Input() rezervariBikepark: RezervareBikePark[] = [];
  @Input() rezervariConcurs: RezervareConcurs[] = [];
  @Input() concursuri: Concurs[] = [];
  // @Input() skillList :string;

  constructor() {
    /*for (let i = 0; i < this.rezervariBikepark.length; i++) {
      console.log('Message card ' + this.rezervariBikepark[i].ziua);
    }*/
    // console.log('Message Card ' + this.rezervariBikepark[0].numeBikepark);
    console.log('Message Card ' + this.rezervariBikepark.length);
  }


  ngOnInit() {
  }

}
