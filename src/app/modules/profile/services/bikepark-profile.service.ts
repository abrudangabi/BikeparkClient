import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BikePark} from '../../../shared/model/BikePark';
import {Locatie} from '../../../shared/model/Locatie';
import {RezervareBikePark} from '../../../shared/model/RezervareBikePark';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Contact} from '../../../shared/model/Contact';
import {Photo} from '../../../shared/model/Photo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export abstract class AbstractBikeparkProfileService {
  bikepark: BikePark;

  // heroesUrl: string;

  public abstract getBikepark(id: number): Observable<BikePark>;

  public abstract initialize();

  public abstract addRezervare(rezervareBikePark: RezervareBikePark): Observable<RezervareBikePark>;

  public abstract isHisProfile(): boolean;
}

export class MockBikeparkProfileService implements AbstractBikeparkProfileService {
  locatie1: Locatie = {
    id: 1,
    tara: 'Romania',
    provincie: 'Bihor',
    localitate: 'Betfia'
  };

  photo1: Photo = {
    id: 1,
    url: 'https://i.ytimg.com/vi/TLERVskCk8I/maxresdefault.jpg'
  };

  contact1: Contact = {
    id: 1,
    locatie: this.locatie1,
    photo: this.photo1
  };

  rezervari: RezervareBikePark[] = [];

  bikepark: BikePark = {
    id: 1,
    denumire: 'Crater Betfia',
    telescaun: false,
    nrLocuri: 200,
    contact: this.contact1
  };

  // heroesUrl = 'api/rezervaribikepark';  // URL to web api

  /*constructor(
    private http: HttpClient) {
  }*/

  getBikepark(id: number): Observable<BikePark> {
    return of(this.bikepark);
  }

  initialize() {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /*getRezervari(): Observable<RezervareBikePark[]> {
    return this.http.get<RezervareBikePark[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getRezervari', []))
      );
  }*/

  isHisProfile(): boolean {
    return false;
  }

  addRezervare(rezervareBikePark: RezervareBikePark): Observable<RezervareBikePark> {
    window.alert('Se duce ');
    window.alert(rezervareBikePark.ziua);
    // window.alert('numarul : ' + this.getRezervari().subscribe(val => console.log(val.length)));
    console.log('vine rahatul ' + rezervareBikePark.id + ' ' + rezervareBikePark.ziua + ' '
      + rezervareBikePark.bikepark_id + ' ' + rezervareBikePark.biker_id);
    this.rezervari.push(rezervareBikePark);
    // this.getRezervari().subscribe(val => console.log(val.length));
    console.log('cate sunt : ' + this.rezervari.length);
    return of(rezervareBikePark);
    /*return this.http.post<RezervareBikePark>(this.heroesUrl, rezervareBikePark, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', rezervareBikePark))
      );*/
  }
}

export class ServerBikeparkProfileService implements AbstractBikeparkProfileService {
  bikepark: BikePark;

  private url = 'http://localhost:8080/api/bikepark';
  // private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api
  bikeparkID: number;
  isBikepark: boolean;
  isUsersProfile: boolean = true;
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      })
  };

  // heroesUrl = 'api/rezervaribikepark';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  getBikepark(id: number): Observable<BikePark> {
    if ((!this.isBikepark) || id === this.bikeparkID) {
      this.isUsersProfile = false;
    }
    return this.http.get<BikePark>(this.url + '/bikepark/details/' + id).pipe(
      tap(
        data => {
          this.bikepark = data;
          // todo delete this after backend delivers the object properly :)
          this.bikepark.contact = {};
        },
        error => {
          console.log(error);
        }
      )
    );
    return undefined;
  }

  initialize() {
  }

  addRezervare(rezervareBikePark: RezervareBikePark): Observable<RezervareBikePark> {
    return this.http.post(this.url + '/rezervarebikepark/rezerva' ,
      rezervareBikePark,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.bikepark = data;
        },
        error => {
          console.log(error);
        }
      )
    );
    // return undefined;
  }

  isHisProfile(): boolean {
    return this.isUsersProfile;
  }
}
