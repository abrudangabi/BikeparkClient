import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConcursPageComponent} from './pages/concurs-page/concurs-page.component';
import {ConcursDetailsPageComponent} from './pages/concurs-details-page/concurs-details-page.component';

const concursRoutes: Routes = [
  {
    path: 'concurs',
    component: ConcursPageComponent
    /*canActivate: [AuthGuard]*/
  },
  {path: 'concurs/:id', component: ConcursDetailsPageComponent/*, canActivate: [AuthGuard]*/},

];

@NgModule({
  imports: [
    RouterModule.forChild(concursRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConcursRoutingModule { }
