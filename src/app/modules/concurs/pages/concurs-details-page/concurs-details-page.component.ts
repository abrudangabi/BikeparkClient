import { Component, OnInit } from '@angular/core';
import {Concurs} from '../../../../shared/model/Concurs';
import {Photo} from '../../../../shared/model/Photo';
import {Categorie} from '../../../../shared/model/Categorie';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-concurs-details-page',
  templateUrl: './concurs-details-page.component.html',
  styleUrls: ['./concurs-details-page.component.css']
})
export class ConcursDetailsPageComponent implements OnInit {

  public concursID: string;
  public concursDetails: Concurs;
  public concursLogo: Photo;
  // public concursTags: Tag[];
  public concursCategorii: Categorie[];

  constructor(private details: AbstractConcursDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.concursID = params.id;
    });
  }

  ngOnInit() {
    this.initialize();
    this.details.getConcurs(this.concursID).subscribe(concurs => this.concursDetails = concurs);
    this.details.getConcursLogo(this.concursID).subscribe(concursLogo => this.concursLogo = concursLogo);
    // this.details.getInternshipTags(this.internshipID).subscribe(internshipTags => this.internshipTags = internshipTags);
    this.details.getConcursCategorii(this.concursID).subscribe(concursCategorii => this.concursCategorii = concursCategorii);
    //
    console.log('da-i cu url aici');
    console.log(this.concursLogo.url);
  }

  private initialize() {
    this.details.initialize();
  }

}
