import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikeparksPageComponent} from './page/bikeparks-page/bikeparks-page.component';
import {AuthGuard} from '../guard/auth-guard.service';
import {RouterModule, Routes} from '@angular/router';

const bikeparksRoutes: Routes = [
  {
    path: 'bikeparks',
    component: BikeparksPageComponent,
    // canActivate: [AuthGuard]
  },

];

// TODO : Nu pot sa cred ca nu trebuia AuthGuard

@NgModule({
  imports: [
    RouterModule.forChild(bikeparksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BikeparksRoutingModule {
  constructor() {
    console.log('Bikepark routing');
  }
}
