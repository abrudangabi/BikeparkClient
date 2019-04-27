import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DatePipe} from '@angular/common';
import {Concurs} from '../../../../shared/model/Concurs';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';

@Component({
  selector: 'app-concurs-edit',
  templateUrl: './concurs-edit.component.html',
  styleUrls: ['./concurs-edit.component.css']
})
export class ConcursEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  concurs: Concurs;

  constructor(
    public datepipe: DatePipe,
    private concursService: AbstractConcursDetailsService,
    public dialogRef: MatDialogRef<ConcursEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.concurs = data.concurs;
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
    this.concursService.initialize();
  }

}
