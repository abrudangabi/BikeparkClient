import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BikePark, Categorie} from 'src/app/shared/model/models';
import {AbstractConcursService} from '../../services/concurs.service';

@Component({
  selector: 'app-filters-concurs',
  templateUrl: './filters-concurs.component.html',
  styleUrls: ['./filters-concurs.component.css']
})
export class FiltersConcursComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterForm: FormGroup;
  removable = true;
  bikeparks: BikePark[] = [];
  categorii: Categorie[] = [];
  selectedBikeparks: BikePark[] = [];
  selectedCategorii: Categorie[] = [];
  @ViewChild('triggerBikepark', {read: MatAutocompleteTrigger}) triggerBikepark: MatAutocompleteTrigger;
  @ViewChild('triggerCategorii', {read: MatAutocompleteTrigger}) triggerCategorii: MatAutocompleteTrigger;
  timeout;

  constructor(private concursService: AbstractConcursService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.concursService.getBikepark().subscribe(
      (data: BikePark[]) => this.bikeparks = data,
      error => console.log(error)
    );
    this.concursService.getCategorii().subscribe(
      (data: Categorie[]) => this.categorii = data,
      error => console.log(error)
    );
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          const categorieS = 'categorie';
          if (params[categorieS] !== undefined) {
            this.selectedCategorii = this.selectedCategorii.concat(decodeURI(params[categorieS])
              .split(',').map((tipDisciplina: string) => this.categorii.find((categorie) => categorie.tipDisciplina === tipDisciplina)));
          }
          const bikeparkS = 'bikepark';
          if (params[bikeparkS] !== undefined) {
            this.selectedBikeparks = this.selectedBikeparks.concat(decodeURI(params[bikeparkS])
              .split(',').map((denumire: string) => this.bikeparks.find((bikepark) => bikepark.denumire === denumire)));
          }
          this.setFilters();
          this.router.navigate(['concurs']);
        }
      );
    /*const bikeparkF = 'bikeparkFilter';
    const categorieF = 'categorieFilter';*/
    this.filterForm = new FormGroup({
      'bikeparkFilter': new FormControl(''),
      'categorieFilter': new FormControl('')
    });
  }

  public get filteredBikeparks() {
    const value = this.filterForm.get('bikeparkFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      return this.bikeparks.filter(bikepark => this.selectedBikeparks.indexOf(bikepark) < 0)
        .filter((bikepark) => bikepark.denumire.toLowerCase().includes(value.toLowerCase()));
    }
    return this.bikeparks.filter(bikepark => this.selectedBikeparks.indexOf(bikepark) < 0);
  }

  public get filteredCategorii() {
    const value = this.filterForm.get('categorieFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      return this.categorii.filter(categorie => this.selectedCategorii.indexOf(categorie) < 0)
        .filter((categorie) => categorie.tipDisciplina.toLowerCase().includes(value.toLowerCase()));
    }
    return this.categorii.filter(categorie => this.selectedCategorii.indexOf(categorie) < 0);
  }

  removeBikepark(value: BikePark): void {
    const index = this.selectedBikeparks.indexOf(value);
    if (index >= 0) {
      this.selectedBikeparks.splice(index, 1);
    }
    this.setFilters();
  }

  removeCategorie(value: Categorie): void {
    const index = this.selectedCategorii.indexOf(value);
    if (index >= 0) {
      this.selectedCategorii.splice(index, 1);
    }
    this.setFilters();
  }

  selectedBikepark(event: MatAutocompleteSelectedEvent): void {
    this.selectedBikeparks.push(event.option.value);
    const self = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(function() {
      self.triggerBikepark.openPanel();
    }, 0);
    this.filterForm.get('bikeparkFilter').setValue(null);
    this.setFilters();
  }

  selectedCategorie(event: MatAutocompleteSelectedEvent): void {
    this.selectedCategorii.push(event.option.value);
    const self = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(function() {
      self.triggerCategorii.openPanel();
    }, 0);
    this.filterForm.get('categorieFilter').setValue(null);
    this.setFilters();
  }

  private setFilters() {
    this.concursService.setBikeparkFilters(this.selectedBikeparks);
    this.concursService.setCategorieFilters(this.selectedCategorii);
  }

}
