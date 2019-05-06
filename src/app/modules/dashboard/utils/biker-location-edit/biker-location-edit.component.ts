import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Biker} from '../../../../shared/model/Biker';
import {DatePipe} from '@angular/common';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Locatie} from '../../../../shared/model/Locatie';

@Component({
  selector: 'app-biker-location-edit',
  templateUrl: './biker-location-edit.component.html',
  styleUrls: ['./biker-location-edit.component.scss']
})
export class BikerLocationEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  location: Locatie;

  constructor(
    public datepipe: DatePipe,
    private bikerService: AbstractBikeparksForDashboardServicesService,
    public dialogRef: MatDialogRef<BikerLocationEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.location = data.location;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  // TODO trebuie facut
  onSaveClick() {
    // this.internship.birthday = new Date(this.datepipe.transform(this.internship.birthday, 'yyyy-MM-dd'));
    // this.studentProfileService.updateStudentProfileBasic(this.internship)
    //   .subscribe(() => {
    //     this.editSubmitEventEmitter.emit();
    //     this.dialogRef.close();
    //   });
  }

  private initialize() {
    this.bikerService.initialize();
  }

}
