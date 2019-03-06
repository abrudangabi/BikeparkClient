import {Routes} from '@angular/router';
import {AuthGuard} from '../guard/auth-guard.service';
import {BikeparkProfilePageComponent} from './pages/bikepark-profile-page/bikepark-profile-page.component';

export const profileRoutes: Routes = [
  {path: 'profile/bikepark/:id', component: BikeparkProfilePageComponent},
];
