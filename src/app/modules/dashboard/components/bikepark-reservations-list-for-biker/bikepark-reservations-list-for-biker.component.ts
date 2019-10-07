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
  // bikeparkRezervationList: BikeparkReservationRequest[] = [];
  bikeparkRezervationList: RezervareBikePark[] = [];
  isBiker: boolean;

  constructor(private bikeparkRezervation: AbstractBikeparksForDashboardServicesService,
              private router: Router, private changeDetectionRef: ChangeDetectorRef) {
    this.isBiker = this.bikeparkRezervation.isHisProfile();
    console.log('Lungimea la dashboard ' + this.bikeparkRezervationList.length);
  }

  ngOnInit() {
    this.getRezervari();
  }

  private getRezervari() {
    this.bikeparkRezervation.initialize();
    this.bikeparkRezervation.getRezervariForBiker().subscribe(data => {
      this.bikeparkRezervationList = data;
    });
  }

  redirectToBikeparkPage(id: number) {
    console.log('Id in lista de rezervari bikepark pt biker ' + id);
    this.bikeparkRezervation.getBikeparkByRezervare(id).subscribe(data => {
      this.router.navigateByUrl('/profile/bikepark/' + data.id);
    });
    //this.router.navigateByUrl('/profile/bikepark/' + id);
  }

  deleteBikeparkRezervation(id: number) {
    this.bikeparkRezervation.deleteRezervareBikepark(id).subscribe(() => {
      /*this.bikeparkRezervation.getRezervariBikeparkForBiker().subscribe( data => {
        this.bikeparkRezervationList = data;
      });*/
    });
    console.log('Se sterge Rezervarea ' + id);
  }

}
