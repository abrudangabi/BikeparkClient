import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DatePipe} from '@angular/common';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';

@Component({
  selector: 'app-bikepark-edit',
  templateUrl: './bikepark-edit.component.html',
  styleUrls: ['./bikepark-edit.component.scss']
})
export class BikeparkEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  bikepark: BikePark;

  constructor(
    public datepipe: DatePipe,
    private bikeparkProfileService: AbstractBikeparkProfileService,
    public dialogRef: MatDialogRef<BikeparkEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.bikepark = data.bikepark;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  onSaveClick() {
    this.bikeparkProfileService.editBikepark(this.bikepark)
      .subscribe();
    // this.internship.birthday = new Date(this.datepipe.transform(this.internship.birthday, 'yyyy-MM-dd'));
    // this.studentProfileService.updateStudentProfileBasic(this.internship)
    //   .subscribe(() => {
    //     this.editSubmitEventEmitter.emit();
    //     this.dialogRef.close();
    //   });
  }

  private initialize() {
    this.bikeparkProfileService.initialize();
  }

}
