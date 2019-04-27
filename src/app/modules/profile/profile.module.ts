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
import { TraseuListComponent } from './components/traseu-list/traseu-list.component';
import { TraseuListItemComponent } from './components/traseu-list-item/traseu-list-item.component';
import {AbstractTraseuService} from './services/traseu.service';
import { RezervareAddComponent } from './components/rezervare-add/rezervare-add.component';
import { TraseuAddComponent } from './components/traseu-add/traseu-add.component';
import { BikeparkEditComponent } from './components/bikepark-edit/bikepark-edit.component';
import { BikeparkContactEditComponent } from './components/bikepark-contact-edit/bikepark-contact-edit.component';

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
    BikeparkProfilePageComponent,
    TraseuListComponent,
    TraseuListItemComponent,
    RezervareAddComponent,
    TraseuAddComponent,
    BikeparkEditComponent,
    BikeparkContactEditComponent
  ],
  entryComponents: [
    RezervareAddComponent,
    BikeparkEditComponent,
    TraseuAddComponent,
    BikeparkContactEditComponent
  ],
  providers: [
    {
      provide: AbstractBikeparkProfileService,
      useClass: environment.bikeparkProfileService
    },
    {
      provide: AbstractTraseuService,
      useClass: environment.traseuService
    },
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileModule {
}
