import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Biker} from '../../../../shared/model/Biker';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {DashboardService} from '../service/dashboard.service';

@Component({
  selector: 'app-biker-edit',
  templateUrl: './biker-edit.component.html',
  styleUrls: ['./biker-edit.component.scss']
})
export class BikerEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  biker: Biker;

  constructor(
    public datepipe: DatePipe,
    private bikerService: AbstractBikeparksForDashboardServicesService,
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<BikerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.biker = data.biker;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  // TODO trebuie facut
  onSaveClick() {
    this.dashboardService.editBiker(this.biker)
      .subscribe();
    this.dialogRef.close();
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
