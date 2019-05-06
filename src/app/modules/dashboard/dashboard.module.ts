import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import {ApplicantDashboardComponent} from './components/applicantDashboard/applicant-dashboard.component';
/*import {MessageCard} from './utils/message-card/message-card.component';
import {MiniProfile} from './utils/mini-profile/mini-profile.component';
import {BusinessList} from './utils/business-list/business-list.component';
import {XYLineChartComponent} from './utils/xyline-chart/xyline-chart.component';
import {PieChartComponent} from './utils/pie-chart/pie-chart.component';*/

import {appRoutes} from '../../app.module';
// import {InternshipsListForApplicantComponent} from './components/internships-list-for-applicant/
// internships-list-for-applicant.component';
// import {AbstractIntershipsForDashboardServicesService} from './services/interships-services.service';
import {environment} from '../../../environments/environment';
// import {ChartsModule} from 'ng2-charts';
import {BikeparkReservationsListForBikerComponent} from './components/bikepark-reservations-list-for-biker/bikepark-reservations-list-for-biker.component';
import {ConcursReservationsListForBikerComponent} from './components/concurs-reservations-list-for-biker/concurs-reservations-list-for-biker.component';
import {BikerDashboardComponent} from './components/biker-dashboard/biker-dashboard.component';
import {AbstractBikeparksForDashboardServicesService} from './services/bikeparks-service.service';
import {AbstractConcursForDashboardServicesService} from './services/concurs-service.service';
import { BikeparkDashboardComponent } from './components/bikepark-dashboard/bikepark-dashboard.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatChipsModule,
} from '@angular/material';
import {MessageCard} from './utils/message-card/message-card.component';
import {MiniProfile} from './utils/mini-profile/mini-profile.component';
import {BusinessList} from './utils/business-list/business-list.component';
import { BikerInfoComponent } from './utils/biker-info/biker-info.component';
import { BikerEditComponent } from './utils/biker-edit/biker-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConcursEditComponent} from '../concurs/components/concurs-edit/concurs-edit.component';
import {RezervareConcursAddComponent} from '../concurs/components/rezervare-concurs-add/rezervare-concurs-add.component';
import {CategorieAddComponent} from '../concurs/components/categorie-add/categorie-add.component';
import { BikeparkProfileComponent } from './utils/bikepark-profile/bikepark-profile.component';
import { BikeparkEditComponent } from './utils/bikepark-edit/bikepark-edit.component';
import { ConcursListForBikeparkComponent } from './components/concurs-list-for-bikepark/concurs-list-for-bikepark.component';
import { AddConcursComponent } from './utils/add-concurs/add-concurs.component';
import { BikeparkMessageComponent } from './utils/bikepark-message/bikepark-message.component';
import { BikerContactEditComponent } from './utils/biker-contact-edit/biker-contact-edit.component';
import { BikerLocationEditComponent } from './utils/biker-location-edit/biker-location-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    NgbModule,
  ],
  entryComponents: [BikerEditComponent, AddConcursComponent,
    BikerContactEditComponent, BikerLocationEditComponent],
  declarations: [
    /*MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    PieChartComponent,*/
    MessageCard,
    MiniProfile,
    BusinessList,
    BikeparkReservationsListForBikerComponent,
    ConcursReservationsListForBikerComponent,
    BikerDashboardComponent,
    BikeparkDashboardComponent,
    BikerInfoComponent,
    BikerEditComponent,
    BikeparkProfileComponent,
    BikeparkEditComponent,
    ConcursListForBikeparkComponent,
    AddConcursComponent,
    BikeparkMessageComponent,
    BikerContactEditComponent,
    BikerLocationEditComponent
  ],
  exports: [
    BikerDashboardComponent,
    BikeparkDashboardComponent,
    /*MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,*/
    MessageCard,
    BikeparkMessageComponent,
    MiniProfile,
    BusinessList,
    RouterModule],
  providers: [
    {
      provide: AbstractBikeparksForDashboardServicesService,
      useClass: environment.bikeparkServiceForDashboardService
    },
    {
      provide: AbstractConcursForDashboardServicesService,
      useClass: environment.concursServiceForDashboardService
    }
  ]
})
export class DashboardModule {
}
