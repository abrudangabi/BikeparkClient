import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Biker} from '../../../../shared/model/Biker';
import {DatePipe} from '@angular/common';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Contact} from '../../../../shared/model/Contact';
import {DashboardService} from '../service/dashboard.service';

@Component({
  selector: 'app-biker-contact-edit',
  templateUrl: './biker-contact-edit.component.html',
  styleUrls: ['./biker-contact-edit.component.scss']
})
export class BikerContactEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  contact: Contact;

  constructor(
    public datepipe: DatePipe,
    private bikerService: AbstractBikeparksForDashboardServicesService,
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<BikerContactEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contact = data.contact;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  // TODO trebuie facut
  onSaveClick() {
    this.dashboardService.editBikerContact(this.contact)
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
