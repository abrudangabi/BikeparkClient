import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {profileRoutes} from './profile.routing';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { BikeparkProfilePageComponent } from './pages/bikepark-profile-page/bikepark-profile-page.component';
import {AbstractBikeparkProfileService} from './services/bikepark-profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes),
    AgmCoreModule,
    PdfViewerModule
  ],
  declarations: [
    BikeparkProfilePageComponent
  ],
  entryComponents: [
  ],
  providers: [
    {
      provide: AbstractBikeparkProfileService,
      useClass: environment.bikeparkProfileService
    },
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileModule {
}
