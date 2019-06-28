import { Component, OnInit } from '@angular/core';
import {Company} from '../../../../shared/model/Company';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {Biker} from '../../../../shared/model/Biker';
import {Photo} from '../../../../shared/model/Photo';
import {Contact} from '../../../../shared/model/Contact';
import {DashboardService} from '../../utils/service/dashboard.service';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {BikePark} from '../../../../shared/model/BikePark';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {Concurs} from '../../../../shared/model/Concurs';
import {AbstractConcursForDashboardServicesService} from '../../services/concurs-service.service';

@Component({
  selector: 'app-bikepark-dashboard',
  templateUrl: './bikepark-dashboard.component.html',
  styleUrls: ['./bikepark-dashboard.component.scss']
})
export class BikeparkDashboardComponent implements OnInit {

  // public companies: Company[];
  public rezervariBikepark: RezervareBikePark[] = [];
  public rezervariConcurs: RezervareConcurs[] = [];
  public concursuri: Concurs[] = [];
  // public biker: Biker;
  public bikepark: BikePark = new class implements BikePark {
    denumire: string;
    descriere: string;
    id: number;
    nrLocuri: number;
    telescaun: boolean;
  };
  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};
  photo2: Photo = {id: 2, url: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'};

  contact1: Contact = {id: 1, phoneNumber: '124124', photo: this.photo1};
  contact2: Contact = {id: 2, phoneNumber: '4234235', photo: this.photo2};

  constructor(/*private dashboardService: DashboardService,*/
              private bikeparkService: AbstractBikeparksForDashboardServicesService,
              private concursService: AbstractConcursForDashboardServicesService) {

    // this.dashboardService.initialize();
    // this.bikepark = bikeparkService.getBikepark();
    this.bikeparkService.getBikepark().subscribe((rez) => {
      this.bikepark = rez;
    });
    // this.biker = bikeparkService.getBiker();
    this.bikeparkService.getRezervariForBikepark().subscribe((rez) => {
      this.rezervariBikepark = rez;
    }, (error) => {
    });
    this.concursService.getRezervariForBikepark().subscribe((rez) => {
      this.rezervariConcurs = rez;
    });
    this.concursService.getConcursuri().subscribe((rez) => {
      this.concursuri = rez;
    });
    /*this.companies = [
      {
        id: 1,
        name: 'La Fortech',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
          ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
          ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
          ' cursus euismod. In nibh mauris cursus mattis molestie a.',
        dimension: 1,
        views: 1,
        contact: this.contact1
      },
      {
        id: 2,
        name: 'La Arobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
          ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
          ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
          ' cursus euismod. In nibh mauris cursus mattis molestie a.',
        dimension: 5,
        views: 10,
        contact: this.contact2
      }
    ];*/
  }


  ngOnInit() {

  }

}
