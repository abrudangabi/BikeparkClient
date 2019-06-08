import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparksService} from '../../../bikepark/services/bikeparks.service';
import {Traseu} from '../../../../shared/model/Traseu';
import {AbstractTraseuService} from '../../services/traseu.service';
import {TraseuListComponent} from '../traseu-list/traseu-list.component';
import {init} from 'protractor/built/launcher';

@Component({
  selector: 'app-traseu-list-item',
  templateUrl: './traseu-list-item.component.html',
  styleUrls: ['./traseu-list-item.component.css']
})
export class TraseuListItemComponent implements OnInit {

  @Input() traseu: Traseu;
  @Input() index: number;
  distance: number;
  isHisProfile = true;

  constructor(private traseuService: AbstractTraseuService,
              private traseuList: TraseuListComponent) {
    // console.log('Traseul ' + this.traseu.denumire);
  }

  ngOnInit() {
    /*this.bikeparksService.getDistances(this.company.id).subscribe(
      (data: number) => {
        this.distance = data;
        this.changeDetectionRef.detectChanges();
      }
    );*/
    this.traseuService.initialize();
    // console.log('Traseul ' + this.traseu.denumire);
  }

  public verifGreu() {
    if (this.traseu.dificultate === 'greu') {
      return true;
    }
    return false;
  }

  public verifMediu() {
    if (this.traseu.dificultate === 'mediu') {
      return true;
    }
    return false;
  }

  public verifUsor() {
    if (this.traseu.dificultate === 'usor') {
      return true;
    }
    return false;
  }

  deleteTraseu(id: number) {
    console.log('Apasa delete' + id);
    this.traseuList.deleteTraseu(id);
    /*this.traseuService.deleteTraseu(id).subscribe(() => {
      TraseuListComponent.toString();
      // this.getCategorii();
    });*/
  }

}
