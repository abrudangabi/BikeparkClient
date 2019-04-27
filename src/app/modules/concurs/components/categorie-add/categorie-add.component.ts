import {ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Traseu} from '../../../../shared/model/Traseu';
import {DatePipe} from '@angular/common';
import {AbstractTraseuService} from '../../../profile/services/traseu.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Categorie} from '../../../../shared/model/Categorie';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  categorie: Categorie;

  constructor(
    public datepipe: DatePipe,
    private concursService: AbstractConcursDetailsService,
    public dialogRef: MatDialogRef<CategorieAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetectionRef: ChangeDetectorRef) {
    this.categorie = data.categorie;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  onSaveClick() {
    console.log('traseu: ' + this.categorie.id + ' ' + this.categorie.tipDisciplina + ' ' +
      +this.categorie.dificultate + ' ' + this.categorie.varsta + ' ' + this.categorie.lungime);
    this.categorie.id++;
    this.concursService.addCategorie(this.categorie)
      .subscribe();
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
