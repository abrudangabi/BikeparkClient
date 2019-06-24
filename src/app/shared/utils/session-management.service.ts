import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Company} from '../model/Company';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Role} from '../model/Role';
import {Applicant} from '../model/applicant';
import {applicantNavBarItems, companyNavBarItems} from '../../app.module';
import {BikePark} from '../model/BikePark';
import {Biker} from '../model/Biker';

@Injectable()
export class SessionManagementService {

  private getLoggedUserInfoUrl = 'http://localhost:8080/api/user';
  private baseUrl = 'http://localhost:8080/api';
  private token = null;
  private currentLoggedUser: User = null;
  private specificId: number;
  public isLoginDataLoadingFinished: EventEmitter<boolean> = new EventEmitter();
  private everythingLoaded = false;

  constructor(private http: HttpClient) {

  }

  public setToken(token: string) {
    token = 'Bearer ' + token;
    this.token = token;
    this.getLoggedUser().subscribe((user) => {
      this.currentLoggedUser = user;
      if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.BIKER) {
        this.getLoggedBikerInfo().subscribe((biker) => {
          this.specificId = biker.id;
          this.addMyProfileButtonToNavBar();
          this.everythingLoaded = true;
          this.persistInLocalStorage();
          this.isLoginDataLoadingFinished.emit(true);
        }, (error) => {
          console.log(error);
          this.isLoginDataLoadingFinished.emit(false);
        });
      } else if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.BIKEPARK) {
        this.getLoggedBikeparkInfo().subscribe((bikepark) => {
          this.specificId = bikepark.id;
          this.addMyProfileButtonToNavBar();
          this.everythingLoaded = true;
          this.persistInLocalStorage();
          this.isLoginDataLoadingFinished.emit(true);
        }, (error) => {
          console.log(error);
          this.isLoginDataLoadingFinished.emit(false);
        });
      } else {
        this.isLoginDataLoadingFinished.emit(false);
      }
    }, (error) => {
      console.log(error);
      this.isLoginDataLoadingFinished.emit(false);
    });
  }

  private persistInLocalStorage() {
    localStorage.setItem('token', this.token);
    localStorage.setItem('currentLoggedUser', JSON.stringify(this.currentLoggedUser));
    localStorage.setItem('everythingLoaded', JSON.stringify(this.everythingLoaded));
    localStorage.setItem('specificId', JSON.stringify(this.specificId));
  }

  public retrieveFromLocalStorage() {
    this.token = localStorage.getItem('token');
    this.currentLoggedUser = JSON.parse(localStorage.getItem('currentLoggedUser'));
    this.everythingLoaded = JSON.parse(localStorage.getItem('everythingLoaded'));
    this.specificId = JSON.parse(localStorage.getItem('specificId'));
    if (this.currentLoggedUser != null) {
      this.addMyProfileButtonToNavBar();
      this.isLoginDataLoadingFinished.emit(true);
    } else {
      this.isLoginDataLoadingFinished.emit(false);
    }
  }

  private addMyProfileButtonToNavBar() {
    if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.BIKER) {
      if (applicantNavBarItems.length === 4) {
        applicantNavBarItems.splice(applicantNavBarItems.length - 1, 1);
      }
      applicantNavBarItems.push({title: 'My profile', path: 'profile/student/' + this.specificId});

      // TODO AM DE FACUT AICI FOARTE IMPORTANT SUS
    } else if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.BIKEPARK) {
      if (companyNavBarItems.length === 2) {
        companyNavBarItems.splice(applicantNavBarItems.length - 1, 1);
      }
      companyNavBarItems.push({title: 'My profile', path: 'profile/bikepark/' + this.specificId});
    }
  }

  public clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentLoggedUser');
    localStorage.removeItem('everythingLoaded');
    localStorage.removeItem('specificId');
    this.token = null;
    this.currentLoggedUser = null;
    this.specificId = null;
    this.everythingLoaded = false;
  }

  public isUserLoggedIn(): boolean {
    return this.token !== null && this.currentLoggedUser !== null;
  }

  public getToken() {
    if (this.token == null) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public removeToken() {

  }

  public getLoggedUserId(): number {
    return this.currentLoggedUser.id;
  }

  public getLoggedUserRole(): Role.RoleStringEnum {
    return this.currentLoggedUser.roles[0].roleString;
  }

  public isEverythingLoaded(): boolean {
    return this.everythingLoaded;
  }


  private getLoggedUser(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<User>(this.getLoggedUserInfoUrl, httpOptions);
  }

  private getLoggedBikeparkInfo(): Observable<BikePark> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<BikePark>(this.baseUrl + '/user/bikepark/' +
      this.getLoggedUserId(), httpOptions);
  }

  private getLoggedBikerInfo(): Observable<Biker> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<BikePark>(this.baseUrl + '/user/biker/' +
      this.getLoggedUserId(), httpOptions);
  }

  public getSpecificId(): number {
    return this.specificId;
  }
}
