import { Component, OnInit } from '@angular/core';
import {Concurs, JoinBikepark, JoinCategorii} from '../../../../shared/model/Concurs';
import {AbstractConcursService} from '../../services/concurs.service';
import {MatDialog} from '@angular/material';
import {BikePark} from '../../../../shared/model/BikePark';
import {Categorie} from '../../../../shared/model/Categorie';

@Component({
  selector: 'app-concurs-list',
  templateUrl: './concurs-list.component.html',
  styleUrls: ['./concurs-list.component.css']
})
export class ConcursListComponent implements OnInit {

  concurs: Concurs[] = [];
  bikeparkJoin: JoinBikepark[] = [];
  categoriesJoin: JoinCategorii[] = [];
  isHisProfile = true;

  constructor(private concursService: AbstractConcursService, public dialog: MatDialog) {
    this.concursService.getConcursuri().subscribe(
      (data: Concurs[]) => {
        this.concurs = data;
        for (const concurs of data) {
          this.concursService.getConcursBikepark(concurs.id).subscribe(
            (bikePark: BikePark) => this.bikeparkJoin.push({
              idConcurs: concurs.id,
              idBikepark: bikePark.id
            }),
            error => console.log(error)
          );
          this.concursService.getConcursCategorie(concurs.id).subscribe(
            (categories: Categorie[]) => this.categoriesJoin.push({
              idConcurs: concurs.id,
              categorii: categories
            }),
            error => console.log(error)
          );
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    console.log('Concurs list');
    this.concursService.bikeparkSubject.subscribe(
      (data: BikePark[]) => this.filterByBikepark(data),
      error => console.log(error)
    );
    this.concursService.categoriiSubject.subscribe(
      (data: Categorie[]) => this.filterByCategorii(data),
      error => console.log(error)
    );
  }

  filterByBikepark(bikeparkFilters: BikePark[]) {
    this.concursService.getConcursuri().subscribe(
      (data: Concurs[]) => {
        this.concurs = data;
      });
    if (bikeparkFilters.length !== 0) {
      this.concurs = this.concurs.filter((concurs) => {
        const bikepark = this.bikeparkJoin.find((join) => join.idBikepark === concurs.id);
        return bikeparkFilters.map((bike) => bike.id).indexOf(bikepark.idBikepark) > -1;
      });
    }
  }


  filterByCategorii(categoriiFilters: Categorie[]) {
    if (categoriiFilters.length !== 0) {
      this.concurs = this.concurs.filter((concurs) => {
        const categoriesFiltered = this.categoriesJoin.find((join) => join.idConcurs === concurs.id);
        return categoriesFiltered.categorii.filter(
          (categorie) => categoriiFilters.map((sk) => sk.id).indexOf(categorie.id) > -1)
          .length === this.concursService.categoriiFilters.length;
      });
    }
  }

  /*openAddInternshipDialog() {
    const dialogRef = this.dialog.open(AddInternshipComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      // todo refresh list
    });
  }*/

}
