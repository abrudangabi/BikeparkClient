import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {DatePipe} from '@angular/common';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Contact} from '../../../../shared/model/Contact';

@Component({
  selector: 'app-bikepark-contact-edit',
  templateUrl: './bikepark-contact-edit.component.html',
  styleUrls: ['./bikepark-contact-edit.component.scss']
})
export class BikeparkContactEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  contact: Contact;

  constructor(
    public datepipe: DatePipe,
    private bikeparkProfileService: AbstractBikeparkProfileService,
    public dialogRef: MatDialogRef<BikeparkContactEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contact = data.contact;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.contact.locatie.strada);
    console.log(this.contact.website);
    this.initialize();
  }

  onSaveClick() {
  }

  private initialize() {
    this.bikeparkProfileService.initialize();
  }

}
