import {Component, Input, OnInit} from '@angular/core';
import {Concurs} from '../../../../shared/model/Concurs';
import {AbstractConcursService} from '../../services/concurs.service';
import {BikePark} from '../../../../shared/model/BikePark';

@Component({
  selector: 'app-concurs-list-item',
  templateUrl: './concurs-list-item.component.html',
  styleUrls: ['./concurs-list-item.component.css']
})
export class ConcursListItemComponent implements OnInit {
  @Input() concurs: Concurs;
  logo: string;
  bikepark: BikePark;

  constructor(private concursService: AbstractConcursService) {
  }

  ngOnInit() {
    if (this.concurs) {
      // this.intershipsService.getInternshipLogo(this.internship.id).subscribe(
      //   (data) =>
      //   error => console.log(error)
      // );
      this.concursService.getConcursBikepark(this.concurs.id).subscribe(
        (data: BikePark) => {
          console.log(data);
          // console.log(data.contact.photo.url);
          this.bikepark = data;
          this.logo = data.contact.photo.url;
        },

        error => console.log(error)
      );
      /*this.concursService.getInternshipTags(this.internship.id).subscribe(
        (data: Tag[]) => this.tags = data,
        error => console.log(error)
      );*/
    }
  }

}
