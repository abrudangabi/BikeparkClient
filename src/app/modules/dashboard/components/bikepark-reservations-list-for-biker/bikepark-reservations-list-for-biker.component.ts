import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {Router} from '@angular/router';
import {BikeparkReservationRequest} from '../../../../shared/model/BikeparkReservationRequest';
import {Biker} from '../../../../shared/model/Biker';
import * as models from '../../../../shared/model/BikePark';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';

@Component({
  selector: 'app-bikepark-reservations-list-for-biker',
  templateUrl: './bikepark-reservations-list-for-biker.component.html',
  styleUrls: ['./bikepark-reservations-list-for-biker.component.scss']
})
export class BikeparkReservationsListForBikerComponent implements OnInit {
  bikeparkRezervationList: BikeparkReservationRequest[] = [];

  constructor(private bikeparkRezervation: AbstractBikeparksForDashboardServicesService,
              private router: Router, private changeDetectionRef: ChangeDetectorRef) {
    console.log('Lungimea la dashboard ' + this.bikeparkRezervationList.length);
  }

  ngOnInit() {
    this.getInternships();
  }

  private getInternships() {
    this.bikeparkRezervation.initialize();
    this.bikeparkRezervation.getRezervariBikeparkForBiker().subscribe(data => {
      this.bikeparkRezervationList = data;
      // this.changeDetectionRef.detectChanges();
    });
  }

  redirectToBikeparkPage(id: number) {
    this.router.navigateByUrl('/profile/bikepark/' + id);
  }

  deleteBikeparkRezervation(id: number) {
    console.log('Se sterge Rezervarea ' + id);
  }

}
