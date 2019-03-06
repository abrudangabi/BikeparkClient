import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BikeparksRoutingModule} from './bikeparks-routing.module';
import {BikeparkListComponent} from './components/bikepark-list/bikepark-list.component';
import {BikeparkListItemComponent} from './components/bikepark-list-item/bikepark-list-item.component';
import {FiltersComponent} from './components/filters/filters.component';
import {environment} from '../../../environments/environment';
import {AbstractBikeparksService} from './services/bikeparks.service';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BikeparksRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [BikeparkListComponent, BikeparkListItemComponent, FiltersComponent],
  exports: [BikeparkListComponent, BikeparkListItemComponent, FiltersComponent],
  providers: [{
    provide: AbstractBikeparksService,
    useClass: environment.bikeparkService
  }]
})
export class BikeparksModule { }
