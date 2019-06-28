import {Component, OnInit, EventEmitter, Inject, Output, ChangeDetectorRef} from '@angular/core';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DatePipe} from '@angular/common';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {Traseu} from '../../../../shared/model/Traseu';
import {AbstractTraseuService} from '../../services/traseu.service';
import {TraseuListComponent} from '../traseu-list/traseu-list.component';
import {BikePark} from '../../../../shared/model/BikePark';

@Component({
  selector: 'app-traseu-add',
  templateUrl: './traseu-add.component.html',
  styleUrls: ['./traseu-add.component.scss']
})
export class TraseuAddComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  traseu: Traseu;
  bikepark: BikePark;
  // trasee: Traseu[];
  disciplina = [
    'ENDURO',
    'XC',
    'DH',
    'ROAD',
    'SLOPE'
  ];
  dificulate = [
    'greu',
    'mediu',
    'usor'
  ];

  constructor(
    public datepipe: DatePipe,
    private traseuService: AbstractTraseuService,
    /*private traseuList: TraseuListComponent,*/
    public dialogRef: MatDialogRef<TraseuAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetectionRef: ChangeDetectorRef) {
    this.traseu = data.traseu;
    this.bikepark = data.bikepark;
  }

  onNoClick() {
    this.dialogRef.close();
    /*this.traseu.id = NaN;
    this.traseu.lungime = NaN;
    this.traseu.tipTraseu = '';
    this.traseu.denumire = '';
    this.traseu.dificultate = '';*/
  }

  ngOnInit() {
    this.initialize();
    /*this.traseu.id = NaN;
    this.traseu.lungime = NaN;
    this.traseu.tipTraseu = '';
    this.traseu.denumire = '';
    this.traseu.dificultate = '';*/
    /*this.traseuService.getTrasee(1)
      .subscribe(traseu => {
        this.trasee = traseu;
        this.changeDetectionRef.detectChanges();
      });*/
  }

  onSaveClick() {
    /*let nr ;
    this.traseuService.getTrasee()
       .subscribe(() => {
         nr = this.traseuService.getTrasee().length();
       });*/
    /*console.log('traseu: ' + this.traseu.id + ' ' + this.traseu.denumire + ' ' +
      +this.traseu.dificultate + ' ' + this.traseu.tipTraseu + ' ' + this.traseu.lungime);
    this.traseu.id++;*/
    // todo adaugare
    // this.traseuList.addTraseu(this.traseu);
    // document.getElementById('Denumire').reset();
    this.traseuService.addTraseu(this.traseu, this.bikepark)
      .subscribe();
    this.dialogRef.close();
    /*this.traseuService.getTrasee(1)
      .subscribe(traseu => {
        this.trasee = traseu;
        this.changeDetectionRef.detectChanges();
      });*/
    // TraseuListComponent.call(this.traseuService.getTrasee(1));
    // return this.trasee;
  }

  private initialize() {
    this.traseuService.initialize();
  }

}
