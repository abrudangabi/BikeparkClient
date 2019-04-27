import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BikeparksRoutingModule} from './bikeparks-routing.module';
import {BikeparkListComponent} from './components/bikepark-list/bikepark-list.component';
import {BikeparkListItemComponent} from './components/bikepark-list-item/bikepark-list-item.component';
import {FiltersComponent} from './components/filters/filters.component';
import {environment} from '../../../environments/environment';
import {AbstractBikeparksService} from './services/bikeparks.service';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
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
import {RouterModule} from '@angular/router';
import {profileRoutes} from '../profile/profile.routing';
import {AgmCoreModule} from '@agm/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forChild(profileRoutes),
    AgmCoreModule,
    PdfViewerModule,
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
