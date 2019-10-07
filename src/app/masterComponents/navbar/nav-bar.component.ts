import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {applicantNavBarItems, companyNavBarItems, NavBarItem} from '../../app.module';
import {SessionManagementService} from '../../shared/utils/session-management.service';
import {Role} from '../../shared/model/Role';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public environment: any;
  public menuNavBar: NavBarItem[];
  isLoginDataLoadingFinishedSubscription: Subscription;

  constructor(private sessionManagementService: SessionManagementService, private router: Router) {
    this.environment = environment;
    this.menuNavBar = applicantNavBarItems; // todo
    // this.menuNavBar.concat(companyNavBarItems);
    this.isLoginDataLoadingFinishedSubscription = this.sessionManagementService.isLoginDataLoadingFinished.subscribe((response) => {
      if (response) {
        /*let isBiker:boolean;
        this.sessionManagementService.getLoggedUserRole().subscribe(data => {
          isBiker = data == Role.RoleStringEnum.BIKER;
        });
        if (isBiker) {
          this.menuNavBar = applicantNavBarItems;
        } else if (!isBiker) {
          this.menuNavBar = companyNavBarItems;
        }*/
        if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.BIKER) {
          this.menuNavBar = applicantNavBarItems;
        } else if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.BIKEPARK) {
          this.menuNavBar = companyNavBarItems;
        }
      }
    });
    if (!this.sessionManagementService.isUserLoggedIn()) {
      this.sessionManagementService.retrieveFromLocalStorage();
    }
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.isLoginDataLoadingFinishedSubscription.unsubscribe();
  }

  public logout() {
    this.sessionManagementService.clearLocalStorage();
    this.router.navigate(['/login']);
  }

}
