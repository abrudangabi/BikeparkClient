import {Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';

@Component({
  selector: 'app-bikepark-profile-page',
  templateUrl: './bikepark-profile-page.component.html',
  styleUrls: ['./bikepark-profile-page.component.css']
})
export class BikeparkProfilePageComponent implements OnInit {
  @Input() bikepark: BikePark;
  idUser: number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bikeparkService: AbstractBikeparkProfileService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getBikepark();
  }

  public getBikepark(): void {
    this.bikeparkService.initialize();
    this.idUser = 1;
    this.id = 1;
    const id = +this.route.snapshot.paramMap.get('id');
    this.bikeparkService.getBikepark(id)
      .subscribe(profile => {
        this.bikepark = profile;
      });
    // this.isHisProfile=this.companyService.isHisProfile();
  }

  addFinal(ziua1: string): void {
    /*rezervareBikePark: RezervareBikePark = {
      id: 1,
      ziua: '2019-05-25'
    };*/
    if (!ziua1) {
      return;
    }
    const rezervareBikePark: RezervareBikePark = {
      id: this.id,
      ziua: ziua1,
      biker_id: this.idUser,
      bikepark_id: this.bikepark.id
    };
    console.log('profile: ' + rezervareBikePark.id + ' ' + rezervareBikePark.ziua + ' ' +
    + rezervareBikePark.biker_id + ' ' + rezervareBikePark.bikepark_id);
    this.id++;
    window.alert(rezervareBikePark.ziua);
    this.bikeparkService.addRezervare(rezervareBikePark)
      .subscribe();
  }

}
