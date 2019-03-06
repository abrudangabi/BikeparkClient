import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BikePark} from '../../../../shared/model/BikePark';
import {AbstractBikeparksService} from '../../services/bikeparks.service';

@Component({
  selector: 'app-bikepark-list-item',
  templateUrl: './bikepark-list-item.component.html',
  styleUrls: ['./bikepark-list-item.component.css']
})
export class BikeparkListItemComponent implements OnInit {

  @Input() bikepark: BikePark;
  @Input() index: number;
  distance: number;

  constructor(private bikeparksService: AbstractBikeparksService, private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    /*this.bikeparksService.getDistances(this.company.id).subscribe(
      (data: number) => {
        this.distance = data;
        this.changeDetectionRef.detectChanges();
      }
    );*/
  }

}
