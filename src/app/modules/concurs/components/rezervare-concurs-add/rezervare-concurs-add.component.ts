import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {DatePipe} from '@angular/common';
import {AbstractBikeparkProfileService} from '../../../profile/services/bikepark-profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';

@Component({
  selector: 'app-rezervare-concurs-add',
  templateUrl: './rezervare-concurs-add.component.html',
  styleUrls: ['./rezervare-concurs-add.component.scss']
})
export class RezervareConcursAddComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  rezervareConcurs: RezervareConcurs;

  constructor(
    public datepipe: DatePipe,
    private rezervareService: AbstractConcursDetailsService,
    public dialogRef: MatDialogRef<RezervareConcursAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.rezervareConcurs = data.rezervareConcurs;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  onSaveClick() {
    const id = this.rezervareService.getRezervari().length;
    this.rezervareConcurs.id = id;
    console.log('profile: ' + this.rezervareConcurs.id + ' ' + this.rezervareConcurs.categorie + ' ' +
      +this.rezervareConcurs.numar);
    this.rezervareConcurs.id++;
    this.rezervareService.addRezervare(this.rezervareConcurs)
      .subscribe();
    window.alert('S-a trimis rezervarea');
  }

  private initialize() {
    this.rezervareService.initialize();
  }

}
