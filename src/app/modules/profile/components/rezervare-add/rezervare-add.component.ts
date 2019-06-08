import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DatePipe} from '@angular/common';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {JQueryStyleEventEmitter} from 'rxjs/internal/observable/fromEvent';
import * as $ from 'node_modules/jquery/dist/jquery.js';

@Component({
  selector: 'app-rezervare-add',
  templateUrl: './rezervare-add.component.html',
  styleUrls: ['./rezervare-add.component.css']
})
export class RezervareAddComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  rezervareBikepark: RezervareBikePark;

  constructor(
    public datepipe: DatePipe,
    private rezervareService: AbstractBikeparkProfileService,
    public dialogRef: MatDialogRef<RezervareAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.rezervareBikepark = data.rezervareBikepark;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  /*getChangedValue(newDate) {
    this.selDate = newDate;
    this.calendar['_activeDate'] = newDate;
    this.calendar['monthView'] = false; // this line updates the calendar view
  }*/

  onSaveClick() {
    /*$(function () {
      $('#datetimepicker').datetimepicker({
        inline: true,
        sideBySide: true,
        locale: 'de',
        format: 'DD.MM.YYYY'
      });
    });
    this.rezervareBikepark.ziua = ziua;*/
    /*$(function () {
      $('#datetimepicker').datetimepicker({
        inline: true,
        sideBySide: true,
        locale: 'de',
        format: 'DD.MM.YYYY'
      });
    });*/
    /*const ziua = document.getElementById('ziua');
    console.log(ziua);
    const id = this.rezervareService.getRezervari().length;
    this.rezervareBikepark.id = id;
    console.log('profile: ' + this.rezervareBikepark.id + ' ' + this.rezervareBikepark.ziua + ' ' +
      +this.rezervareBikepark.biker_id + ' ' + this.rezervareBikepark.bikepark_id);
    this.rezervareBikepark.id++;*/
    this.rezervareService.addRezervare(this.rezervareBikepark)
      .subscribe();
    window.alert('S-a trimis rezervarea');
    // this.internship.birthday = new Date(this.datepipe.transform(this.internship.birthday, 'yyyy-MM-dd'));
    // this.studentProfileService.updateStudentProfileBasic(this.internship)
    //   .subscribe(() => {
    //     this.editSubmitEventEmitter.emit();
    //     this.dialogRef.close();
    //   });
  }

  private initialize() {
    this.rezervareService.initialize();
  }

}
