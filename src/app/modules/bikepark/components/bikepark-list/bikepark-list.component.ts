import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparksService} from '../../services/bikeparks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bikepark-list',
  templateUrl: './bikepark-list.component.html',
  styleUrls: ['./bikepark-list.component.css']
})
export class BikeparkListComponent implements OnInit {
  bikeparks: BikePark[];
  unfilteredBikeparksList: BikePark[];

  constructor(private bikeparkService: AbstractBikeparksService, private router: Router, private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.bikeparkService.initialize();
    this.bikeparkService.getBikeParks()
      .subscribe(bikepark => {
        this.unfilteredBikeparksList = bikepark;
        this.changeDetectionRef.detectChanges();
      });
  }

  public get filteredBikeparks() {

    this.bikeparks = this.unfilteredBikeparksList;
    if (this.bikeparkService.getNameFilters().length !== 0) {
      this.bikeparks = this.bikeparks.filter(
        (bike) => this.bikeparkService.getNameFilters().indexOf(bike.denumire) > -1);
    }
    return this.bikeparks;
  }

  goToDetailedBikepark(bikeparkId: number) {
    this.router.navigate(['./profile/bikepark/' + bikeparkId]);
  }

}
