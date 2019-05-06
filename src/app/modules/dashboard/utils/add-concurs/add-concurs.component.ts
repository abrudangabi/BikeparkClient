import {ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Categorie} from '../../../../shared/model/Categorie';
import {DatePipe} from '@angular/common';
import {AbstractConcursDetailsService} from '../../../concurs/services/concurs-details.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Concurs} from '../../../../shared/model/Concurs';
import {AbstractConcursForDashboardServicesService} from '../../services/concurs-service.service';

@Component({
  selector: 'app-add-concurs',
  templateUrl: './add-concurs.component.html',
  styleUrls: ['./add-concurs.component.scss']
})
export class AddConcursComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  concurs: Concurs;

  constructor(
    public datepipe: DatePipe,
    private concursService: AbstractConcursForDashboardServicesService,
    public dialogRef: MatDialogRef<AddConcursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetectionRef: ChangeDetectorRef) {
    this.concurs = data.concurs;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  onSaveClick() {
    console.log('concurs: ' + this.concurs.id + ' ' + this.concurs.denumire + ' ' +
      +this.concurs.minimParticipanti + ' ' + this.concurs.dataStart + ' ' + this.concurs.nrParticipanti);
    // Todo Add in Service
    this.concurs.nrParticipanti = 0;
    this.concursService.addConcurs(this.concurs);
    /*console.log('traseu: ' + this.categorie.id + ' ' + this.categorie.tipDisciplina + ' ' +
      +this.categorie.dificultate + ' ' + this.categorie.varsta + ' ' + this.categorie.lungime);
    this.categorie.id++;
    this.concursService.addCategorie(this.categorie)
      .subscribe();*/
    /*this.concursService.getConcursCategorii('1')
      .subscribe(traseu => {
        this.trasee = traseu;
        this.changeDetectionRef.detectChanges();
      });*/
  }

  private initialize() {
    this.concursService.initialize();
  }

}
