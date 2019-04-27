import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcursPageComponent } from './pages/concurs-page/concurs-page.component';
import { ConcursDetailsPageComponent } from './pages/concurs-details-page/concurs-details-page.component';
import { ConcursListComponent } from './components/concurs-list/concurs-list.component';
import { ConcursListItemComponent } from './components/concurs-list-item/concurs-list-item.component';
import { FiltersConcursComponent } from './components/filters-concurs/filters-concurs.component';
import { AddConcursComponent } from './components/add-concurs/add-concurs.component';
import { ConcursDetailsComponent } from './components/concurs-details/concurs-details.component';
import { ConcursEditComponent } from './components/concurs-edit/concurs-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
} from '@angular/material';
import {ConcursRoutingModule} from './concurs-routing.module';
import {AbstractConcursService} from './services/concurs.service';
import {AbstractConcursDetailsService} from './services/concurs-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RezervareConcursAddComponent } from './components/rezervare-concurs-add/rezervare-concurs-add.component';
import { CategorieAddComponent } from './components/categorie-add/categorie-add.component';

@NgModule({
  imports: [
    CommonModule,
    ConcursRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    NgbModule
  ],
  entryComponents: [ConcursEditComponent, AddConcursComponent, RezervareConcursAddComponent,
    CategorieAddComponent],
  declarations: [ConcursListComponent, ConcursListItemComponent, FiltersConcursComponent, ConcursDetailsComponent,
    ConcursEditComponent, AddConcursComponent, RezervareConcursAddComponent, CategorieAddComponent],
  exports: [ConcursListComponent, ConcursListItemComponent, FiltersConcursComponent, ConcursDetailsComponent],
  providers: [
    {
      provide: AbstractConcursService,
      useClass: environment.concursService
    },
    {
      provide: AbstractConcursDetailsService,
      useClass: environment.concursDetailsService
    }
  ]

})
export class ConcursModule { }
