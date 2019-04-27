import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {DatePipe} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BikeparkListComponent } from './modules/bikepark/components/bikepark-list/bikepark-list.component';
import { BikeparkListItemComponent } from './modules/bikepark/components/bikepark-list-item/bikepark-list-item.component';
import { FiltersComponent } from './modules/bikepark/components/filters/filters.component';
import { BikeparksPageComponent } from './modules/bikepark/page/bikeparks-page/bikeparks-page.component';
import { BikeparksRoutingModule } from './modules/bikepark/bikeparks-routing.module';
import { BikeparksModule } from './modules/bikepark/bikeparks.module';
import {SessionManagementService} from './shared/utils/session-management.service';
import {AuthGuard} from './modules/guard/auth-guard.service';
import {NavBarComponent} from './masterComponents/navbar/nav-bar.component';
import {NotificationManagerComponent} from './shared/utils/component/notification-manager/notification-manager.component';
import {ProgressSpinnerComponent} from './shared/utils/component/progress-spinner/progress-spinner.component';
import {ProfileModule} from './modules/profile/profile.module';
import { ConcursRoutingModule } from './modules/concurs/concurs-routing.module';
import { ConcursModule } from './modules/concurs/concurs.module';
import {ConcursPageComponent} from './modules/concurs/pages/concurs-page/concurs-page.component';
import {ConcursDetailsPageComponent} from './modules/concurs/pages/concurs-details-page/concurs-details-page.component';

export const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    BikeparksPageComponent,
    ConcursPageComponent,
    ConcursDetailsPageComponent,
    NavBarComponent,
    NotificationManagerComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {} // <-- debugging purposes only
    ),
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC920soN4PRUEoaIeornkVABcYuWkokcYM'
    }),
    BikeparksRoutingModule,
    BikeparksModule,
    ProfileModule,
    ConcursModule,
  ],
  entryComponents: [],
  exports: [
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    SessionManagementService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface NavBarItem {
  title: string;
  path: string;
}

export let applicantNavBarItems: NavBarItem[] = [
  {title: 'Bikeparks', path: 'bikeparks'},
  {title: 'Concurs', path: 'concurs'},
];

export let companyNavBarItems: NavBarItem[] = [
  {title: 'CompanyDashboardComponent', path: 'dashboard/companyHome'},
];
