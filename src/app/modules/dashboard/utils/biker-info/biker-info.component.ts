import {Component, Input, OnInit} from '@angular/core';
import {Concurs} from '../../../../shared/model/Concurs';
import {Photo} from '../../../../shared/model/Photo';
import {Categorie} from '../../../../shared/model/Categorie';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {MatDialog} from '@angular/material';
import {AbstractConcursDetailsService} from '../../../concurs/services/concurs-details.service';
import {ConcursEditComponent} from '../../../concurs/components/concurs-edit/concurs-edit.component';
import {RezervareConcursAddComponent} from '../../../concurs/components/rezervare-concurs-add/rezervare-concurs-add.component';
import {CategorieAddComponent} from '../../../concurs/components/categorie-add/categorie-add.component';
import {Biker} from '../../../../shared/model/Biker';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {BikerEditComponent} from '../biker-edit/biker-edit.component';
import {BikerContactEditComponent} from '../biker-contact-edit/biker-contact-edit.component';
import {BikerLocationEditComponent} from '../biker-location-edit/biker-location-edit.component';

@Component({
  selector: 'app-biker-info',
  templateUrl: './biker-info.component.html',
  styleUrls: ['./biker-info.component.scss']
})
export class BikerInfoComponent implements OnInit {

  @Input() bikerDetails: Biker;
  isBiker: boolean;

  constructor(public dialog: MatDialog, private bikerService: AbstractBikeparksForDashboardServicesService) {
    this.isBiker = bikerService.isHisProfile();
  }

  ngOnInit() {
    this.intialize();
  }

  public getCategorii() {
    /*this.bikerService.getConcursCategorii(this.concursDetails.id.toString()).subscribe(
      list => {
        this.concursCategorii = list;
      }
    );*/
  }

  public openEditDialog() {
    const dialogRef = this.dialog.open(BikerEditComponent, {
      width: '90%',
      data: {biker: this.bikerDetails}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openContactEditDialog() {
    const dialogRef = this.dialog.open(BikerContactEditComponent, {
      width: '90%',
      data: {contact: this.bikerDetails.contact}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openLocationEditDialog() {
    const dialogRef = this.dialog.open(BikerLocationEditComponent, {
      width: '90%',
      data: {location: this.bikerDetails.contact.locatie}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  /*deleteCategorie(id: number) {
    this.concursDetailsService.deleteCategorie(id).subscribe(() => {
      this.getCategorii();
    });
  }*/

  private intialize() {
    this.bikerService.initialize();
    console.log('de ce nu vine img');
    console.log(this.bikerDetails.contact.photo.url);
  }

  onPhotoFileChanged(event) {
    const uploadData = new FormData();
    uploadData.append('file', event.target.files[0], event.name);
    this.bikerService.uploadPhoto(uploadData).then((data) => {
      this.bikerDetails = data;
    }).catch(() => {
      // todo
      console.log('error fronted photo');
    });
  }

}
