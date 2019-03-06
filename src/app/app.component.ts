import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';
import {SessionManagementService} from './shared/utils/session-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private _document: HTMLDocument,
              public sessionManagementService: SessionManagementService) {
    console.log('Ia de aici');
    // console.log(document.getElementById('titleID'));
    _document.getElementById('titleID').innerText = environment.titleEnvironment;
    // console.log(document.getElementById('titleID'));
  }

  public getContentAreaClass(): string {
    if (this.sessionManagementService.isUserLoggedIn() &&
      this.sessionManagementService.isEverythingLoaded()) {
      return 'contentArea';
    } else {
      return '';
    }
  }

  public getNavBarClass(): string {
    if (this.sessionManagementService.isUserLoggedIn() &&
      this.sessionManagementService.isEverythingLoaded()) {
      return '';
    } else {
      return 'hiddenNavBar';
    }
  }
}
