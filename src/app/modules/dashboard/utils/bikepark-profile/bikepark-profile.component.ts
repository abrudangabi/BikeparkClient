import {Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {Traseu} from '../../../../shared/model/Traseu';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractBikeparkProfileService} from '../../../profile/services/bikepark-profile.service';
import {MatDialog} from '@angular/material';
import {RezervareAddComponent} from '../../../profile/components/rezervare-add/rezervare-add.component';
import {BikeparkEditComponent} from '../../../profile/components/bikepark-edit/bikepark-edit.component';
import {TraseuAddComponent} from '../../../profile/components/traseu-add/traseu-add.component';
import {BikeparkContactEditComponent} from '../../../profile/components/bikepark-contact-edit/bikepark-contact-edit.component';

@Component({
  selector: 'app-bikepark-profile',
  templateUrl: './bikepark-profile.component.html',
  styleUrls: ['./bikepark-profile.component.scss']
})
export class BikeparkProfileComponent implements OnInit {

  @Input() bikepark: BikePark;
  idUser: number;
  id: number;
  /*isHisProfile = false;
  isOtherProfile = true;
  rezervareBikepark: RezervareBikePark = new class implements RezervareBikePark {
    bikepark_id: number;
    biker_id: number;
    id: number;
    ziua: string;
  };
  traseu: Traseu = new class implements Traseu {
    denumire: string;
    dificultate: string;
    id: number;
    lungime: number;
    tipTraseu: string;
  };*/

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    /*private bikeparkService: AbstractBikeparkProfileService,
    public dialog: MatDialog*/
  ) {
  }

  ngOnInit() {
    // this.getBikepark();
  }

  /*public getBikepark(): void {
    this.bikeparkService.initialize();
    this.idUser = 1;
    this.id = 1;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Id-ul bikepark-ului pt router din dashboard ' + id);
    this.bikeparkService.getBikepark(id)
      .subscribe(profile => {
        this.bikepark = profile;
      });
    // this.isHisProfile=this.companyService.isHisProfile();
  }*/

  goToProfile(bikeparkId: number) {
    console.log('Id bikepark spre profile ' + bikeparkId);
    this.router.navigate(['./profile/bikepark/' + bikeparkId]);
  }

}
