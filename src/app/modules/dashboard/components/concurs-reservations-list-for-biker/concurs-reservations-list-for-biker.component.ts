import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BikeparkReservationRequest} from '../../../../shared/model/BikeparkReservationRequest';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConcursReservationRequest} from '../../../../shared/model/ConcursReservationRequest';
import {AbstractConcursForDashboardServicesService} from '../../services/concurs-service.service';
import {TraseuAddComponent} from '../../../profile/components/traseu-add/traseu-add.component';
import {AbstractBikeparkProfileService} from '../../../profile/services/bikepark-profile.service';
import {MatDialog} from '@angular/material';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';

@Component({
  selector: 'app-concurs-reservations-list-for-biker',
  templateUrl: './concurs-reservations-list-for-biker.component.html',
  styleUrls: ['./concurs-reservations-list-for-biker.component.scss']
})
export class ConcursReservationsListForBikerComponent implements OnInit {
  // concursRezervationList: ConcursReservationRequest[] = [];
  concursRezervationList: RezervareConcurs[] = [];

  constructor(private concursRezervation: AbstractConcursForDashboardServicesService,
              private router: Router, private changeDetectionRef: ChangeDetectorRef/*,
              public dialog: MatDialog*/) {
    console.log('Lungimea la dashboard ' + this.concursRezervationList.length);
  }

  ngOnInit() {
    this.getRezervari();
  }

  private getRezervari() {
    this.concursRezervation.initialize();
    this.concursRezervation.getRezervariForBiker().subscribe(data => {
      this.concursRezervationList = data;
    });
  }

  redirectToBikeparkPage(id: number) {
    this.router.navigateByUrl('/concurs/' + id);
  }

  /*public openAddTraseuDialog() {
    const dialogRef = this.dialog.open(TraseuAddComponent, {
      width: '90%',
      data: {traseu: this.traseu}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }*/

  deleteConcursRezervation(id: number) {
    this.concursRezervation.deleteRezervareConcurs(id).subscribe(() => {
    });
    console.log('Se sterge Rezervarea ' + id);
  }
}
