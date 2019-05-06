import {Component, Input, OnInit} from '@angular/core';
import {Applicant} from '../../../../shared/model/applicant';
import {Biker} from '../../../../shared/model/Biker';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.scss']
})
export class MiniProfile implements OnInit {
  // public nameToDisplay:string="Rares Beltechi";
  @Input() biker: Biker;

  constructor() { }

  ngOnInit() {
  }

}
