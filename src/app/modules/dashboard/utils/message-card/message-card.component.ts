import {Component, Input, OnInit} from '@angular/core';
// import {Internship} from '../../../../shared/model/InternshipEnums';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCard implements OnInit {

  @Input() rezervariBikepark: RezervareBikePark[] = [];
  @Input() rezervariConcurs: RezervareConcurs[] = [];
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
