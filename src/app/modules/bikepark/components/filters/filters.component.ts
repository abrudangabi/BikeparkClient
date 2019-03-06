import {Component, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup} from '@angular/forms';
import {BikePark} from '../../../../shared/model/BikePark';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';
import {AbstractBikeparksService} from '../../services/bikeparks.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterForm: FormGroup;
  removable = true;
  name: string[] = [];
  selectedNames: string[] = [];
  bikeparks: BikePark[] = [];
  @ViewChild('triggerName', {read: MatAutocompleteTrigger}) triggerName: MatAutocompleteTrigger;
  timeout;

  constructor(private bikeparkService: AbstractBikeparksService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    /*this.bikeparkService.getBikeParks().subscribe(
      (data: BikePark[]) => this.bikeparks = data,
      error => console.log(error)
    );
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          if (params['name'] !== undefined) {
            this.selectedNames = this.selectedNames.concat(decodeURI(params['name'])
              .split(',').map((name: string) => this.name.find((bikepark) => bikepark === name)));
          }
          this.setFilters();
          this.router.navigate(['bikeparks']);
        }
      );
    this.filterForm = new FormGroup({
      'nameFilter': new FormControl('')
    });*/
    // ====
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          if (params['name'] !== undefined) {
            this.selectedNames = this.selectedNames.concat(decodeURI(params['name']).split(','));
          }
          this.router.navigate(['bikeparks']);
        }
      );
    this.filterForm = new FormGroup({
      'nameFilter': new FormControl(''),
    });

    this.bikeparkService.getBikeParks()
      .subscribe(bikepark => {
        this.bikeparks = bikepark;
        this.name = this.bikeparkService.getDenumire();
      });
    this.name = this.bikeparkService.getDenumire();
  }

  public get filteredNames() {
    const value = this.filterForm.get('nameFilter').value;
    if (value !== null && value !== undefined && value !== '') {
      const x = this.name.filter(name => this.selectedNames.indexOf(name) < 0);
      this.filterForm.controls['nameFilter'].setValue('');
      return x;
    }
    return this.name.filter(company => this.selectedNames.indexOf(company) < 0);
  }

  removeName(value: string): void {
    const index = this.selectedNames.indexOf(value);
    if (index >= 0) {
      this.selectedNames.splice(index, 1);
    }
    this.setFilters();
  }

  selectedBikepark(event: MatAutocompleteSelectedEvent): void {
    this.selectedNames.push(event.option.viewValue);
    const self = this;
    clearInterval(this.timeout);
    this.timeout = setTimeout(function() {
      self.triggerName.openPanel();
    }, 0);
    this.filterForm.get('nameFilter').setValue(null);
    this.setFilters();
  }

  private setFilters() {
    this.bikeparkService.setNameFilters(this.selectedNames);
  }

}
