import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {TraseuAddComponent} from '../../../profile/components/traseu-add/traseu-add.component';
import {MatDialog} from '@angular/material';
import {AddConcursComponent} from '../../utils/add-concurs/add-concurs.component';
import {Concurs} from '../../../../shared/model/Concurs';
import {AbstractConcursForDashboardServicesService} from '../../services/concurs-service.service';
import {Categorie} from '../../../../shared/model/Categorie';
import {BikeparkReservationRequest} from '../../../../shared/model/BikeparkReservationRequest';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-concurs-list-for-bikepark',
  templateUrl: './concurs-list-for-bikepark.component.html',
  styleUrls: ['./concurs-list-for-bikepark.component.scss']
})
export class ConcursListForBikeparkComponent implements OnInit {

  concursuri: Concurs[];

  concurs: Concurs = new class implements Concurs {
    dataStart: Date;
    denumire: string;
    id: number;
    minimParticipanti: number;
    nrParticipanti: number;
  };

  constructor(public dialog: MatDialog, private router: Router,
              private concursService: AbstractConcursForDashboardServicesService) { }

  ngOnInit() {
    this.intialize();
    this.getConcursuri();
  }

  public openAddConcursDialog() {
    const dialogRef = this.dialog.open(AddConcursComponent, {
      width: '90%',
      data: {concurs: this.concurs}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  private getConcursuri() {
    this.concursService.initialize();
    this.concursService.getConcursuri(1).subscribe(data => {
      this.concursuri = data;
      // this.changeDetectionRef.detectChanges();
    });
  }

  redirectToConcursPage(id: number) {
    this.router.navigateByUrl('/concurs/' + id);
  }

  deleteConcurs(id: number) {
    this.concursService.deleteConcurs(id).subscribe(() => {
    });
    console.log('Se sterge Concursul ' + id);
  }

  private intialize() {
    this.concursService.initialize();
  }

}
