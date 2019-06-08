import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparksService} from '../../../bikepark/services/bikeparks.service';
import {Router} from '@angular/router';
import {Traseu} from '../../../../shared/model/Traseu';
import {AbstractTraseuService} from '../../services/traseu.service';
import {TraseuAddComponent} from '../traseu-add/traseu-add.component';
import {MatDialog} from '@angular/material';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-traseu-list',
  templateUrl: './traseu-list.component.html',
  styleUrls: ['./traseu-list.component.css']
})
export class TraseuListComponent implements OnInit {

  @Input() bikepark: BikePark;
  traseu: Traseu[];
  traseu1: Traseu = new class implements Traseu {
    denumire: string;
    dificultate: string;
    id: number;
    lungime: number;
    tipTraseu: string;
  };
  isHisProfile = false;

  constructor(private traseuService: AbstractTraseuService, private changeDetectionRef: ChangeDetectorRef,
              public dialog: MatDialog) {
    /*changeDetectionRef.detach();
    setInterval(() => {
      this.changeDetectionRef.detectChanges();
    }, 5000);*/
    /*setInterval(() => {
      // require view to be updated
      this.changeDetectionRef.markForCheck();
    }, 1000);*/
  }

  /*public static addTraseu(traseu: Traseu) {
    this.traseuService.addTraseu(traseu)
      .subscribe( () => {
        this.getTrasee();
      });
    //
  }*/

  ngOnInit() {
    // this.traseuService.initialize();
    this.intialize();
    this.traseuService.getTrasee(this.bikepark.id)
      .subscribe(traseu => {
        this.traseu = traseu;
        this.changeDetectionRef.detectChanges();
      });
  }

  /*public getTrasee() {
    this.traseuService.getTrasee(1).subscribe(
      list => {
        this.traseu = list;
      }
    );
  }*/

  deleteTraseu(id: number) {
    console.log('Apasa delete');
    this.traseuService.deleteTraseu(id).subscribe(() => {
      // this.getTrasee();
      // this.changeDetectionRef.detectChanges();
    });
  }

  public get ListTraseu() {
    return this.traseu;
  }

  private intialize() {
    this.traseuService.initialize();
  }

  public openAddTraseuDialog() {
    const dialogRef = this.dialog.open(TraseuAddComponent, {
      width: '90%',
      data: {traseu: this.traseu1}
    });

    // this.getTrasee();
    // console.log('Dece nu face');

    dialogRef.afterClosed().subscribe(() => {
      // this.getTrasee();
      console.log('closed');
    });
  }

}
