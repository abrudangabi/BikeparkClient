import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {DatePipe} from '@angular/common';
import {AbstractBikeparkProfileService} from '../../../profile/services/bikepark-profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';
import {Concurs} from '../../../../shared/model/Concurs';
import {Categorie} from '../../../../shared/model/Categorie';

@Component({
  selector: 'app-rezervare-concurs-add',
  templateUrl: './rezervare-concurs-add.component.html',
  styleUrls: ['./rezervare-concurs-add.component.scss']
})
export class RezervareConcursAddComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  rezervareConcurs: RezervareConcurs;
  concursDetails: Concurs;
  categorii: Categorie[];

  constructor(
    public datepipe: DatePipe,
    private rezervareService: AbstractConcursDetailsService,
    public dialogRef: MatDialogRef<RezervareConcursAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.rezervareConcurs = data.rezervareConcurs;
    this.concursDetails = data.concurs;
    this.categorii = data.categorii;
  }

  onNoClick() {
    //this.dialogRef.removePanelClass();
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnDestroy() {
    //
  }

  onSaveClick() {
    console.log('concurs ' + this.concursDetails.denumire);
    this.rezervareConcurs.concurs_id = this.concursDetails.id;
    this.rezervareService.addRezervare(this.rezervareConcurs)
      .subscribe();
    //
    /*const id = this.rezervareService.getRezervari().length;
    this.rezervareConcurs.id = id;
    console.log('profile: ' + this.rezervareConcurs.id + ' ' + this.rezervareConcurs.categorie + ' ' +
      +this.rezervareConcurs.numar);
    this.rezervareConcurs.id++;
    this.rezervareService.addRezervare(this.rezervareConcurs)
      .subscribe();*/
    window.alert('S-a trimis rezervarea');
  }

  private initialize() {
    this.rezervareService.initialize();
  }

}
