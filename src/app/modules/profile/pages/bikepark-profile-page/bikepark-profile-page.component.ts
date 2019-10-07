import {Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparkProfileService} from '../../services/bikepark-profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {RezervareAddComponent} from '../../components/rezervare-add/rezervare-add.component';
import {BikeparkEditComponent} from '../../components/bikepark-edit/bikepark-edit.component';
import {TraseuAddComponent} from '../../components/traseu-add/traseu-add.component';
import {Traseu} from '../../../../shared/model/Traseu';
import {BikeparkContactEditComponent} from '../../components/bikepark-contact-edit/bikepark-contact-edit.component';
import {Contact} from '../../../../shared/model/Contact';

@Component({
  selector: 'app-bikepark-profile-page',
  templateUrl: './bikepark-profile-page.component.html',
  styleUrls: ['./bikepark-profile-page.component.css']
})
export class BikeparkProfilePageComponent implements OnInit {
  @Input() bikepark: BikePark;
  idUser: number;
  id: number;
  isHisProfile = false;
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
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bikeparkService: AbstractBikeparkProfileService,
    public dialog: MatDialog
  ) {
    this.isHisProfile = this.bikeparkService.isHisProfile();
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
      +rezervareBikePark.biker_id + ' ' + rezervareBikePark.bikepark_id);
    this.id++;
    window.alert(rezervareBikePark.ziua);
    this.bikeparkService.addRezervare(rezervareBikePark)
      .subscribe();
  }

  public openAddRezervareDialog() {
    const dialogRef = this.dialog.open(RezervareAddComponent, {
      width: '90%',
      data: {rezervareBikepark: this.rezervareBikepark}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openEditBikeparkDialog() {
    console.log('aici ar trebui ' + this.bikepark.denumire);
    const dialogRef = this.dialog.open(BikeparkEditComponent, {
      width: '90%',
      data: {bikepark: this.bikepark}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openAddTraseuDialog() {
    const dialogRef = this.dialog.open(TraseuAddComponent, {
      width: '90%',
      data: {traseu: this.traseu,
      bikepark: this.bikepark}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openEditContactBikeparkDialog() {
    console.log('ia vezi contactul ' + this.bikepark.contact.phoneNumber);
    console.log('ia vezi contactul ' + this.bikepark.contact.locatie.localitate);
    const dialogRef = this.dialog.open(BikeparkContactEditComponent, {
      width: '90%',
      data: {contact: this.bikepark.contact}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  onPhotoFileChanged(event) {
    const uploadData = new FormData();
    uploadData.append('file', event.target.files[0], event.name);
    this.bikeparkService.uploadPhoto(uploadData).then((data) => {
      this.bikepark.contact.photo = data;
    }).catch(() => {
      // todo
      console.log('error fronted photo');
    });
  }

}
