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
import {User} from '../../../shared/model/User';
import * as models from '../../../shared/model/BikePark';
import {Role} from '../../../shared/model/Role';
import RoleStringEnum = Role.RoleStringEnum;
import * as $ from 'node_modules/jquery/dist/jquery.js';

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

  public abstract editBikepark(bikePark: BikePark): Observable<BikePark>;

  public abstract editContactBikepark(contact: Contact): Observable<Contact>;

  public abstract uploadPhoto(uploadData: FormData);

  public abstract isHisProfile(): boolean;

  public abstract getRezervari(): RezervareBikePark[] ;
}

export class MockBikeparkProfileService implements AbstractBikeparkProfileService {
  locatie1: Locatie = {
    id: 1,
    tara: 'Romania',
    provincie: 'Bihor',
    localitate: 'Betfia',
    codPostal: '400000',
    longitude: 22.022242,
    latitude: 46.982779,
    number: '182',
    strada: 'Betfia'
  };

  userB: User = {
    id: 1,
    active: true,

    email: 'crater_betfia@yahoo.com',

    password: 'balala',

    // roles: RoleStringEnum.BIKEPARK,

    username: 'crater_betfia',
  };

  photo1: Photo = {
    id: 1,
    url: 'https://i.ytimg.com/vi/TLERVskCk8I/maxresdefault.jpg'
  };

  contact1: Contact = {
    id: 1,
    locatie: this.locatie1,
    photo: this.photo1,
    phoneNumber: '0771607423',
    website: 'https://www.dirtbike.ro/',
    facebookLink: 'Crater-Betfia'
  };

  rezervari: RezervareBikePark[] = [];

  bikepark: BikePark = {
    id: 1,
    denumire: 'Crater Betfia',
    telescaun: false,
    nrLocuri: 200,
    contact: this.contact1,
    user: this.userB,
    descriere: 'ceva in rusa "Cyka Blyat" '
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

  uploadPhoto(uploadData: FormData) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRezervari(): RezervareBikePark[] {
    return this.rezervari;
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
    // window.alert('Se duce ');
    // window.alert(rezervareBikePark.ziua);
    // window.alert('numarul : ' + this.getRezervari().subscribe(val => console.log(val.length)));
    const id = this.getRezervari().length;
    rezervareBikePark.id = id;
    console.log('profile: ' + rezervareBikePark.id + ' ' + rezervareBikePark.ziua + ' ' +
      +rezervareBikePark.biker_id + ' ' + rezervareBikePark.bikepark_id);
    rezervareBikePark.id++;
    rezervareBikePark.bikepark_id = 1;
    rezervareBikePark.biker_id = 1;
    console.log('vine entitatea ' + rezervareBikePark.id + ' ' + rezervareBikePark.ziua + ' '
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

  editBikepark(bikePark: BikePark): Observable<BikePark> {
    return of(bikePark);
  }

  editContactBikepark(contact: Contact): Observable<Contact> {
    return of(contact);
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
        'Authorization': 'Bearer x'
      })
  };

  // heroesUrl = 'api/rezervaribikepark';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  getRezervari(): RezervareBikePark[] {
    return null;
  }

  uploadPhoto(uploadData: FormData) {
    return new Promise((resolve, reject) => {
      const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/company/' + this.bikepark.id + '/photo';
      $.ajax({
        url: url,
        headers: {
          'Authorization': this.httpOptions.headers.get('Authorization')
        },
        data: uploadData,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(data) {
          resolve(data);
        },
        error: function(request, status, error) {
          reject(false);
        }
      });
    });
  };

  getBikepark(id: number): Observable<BikePark> {
    if ((!this.isBikepark) || id === this.bikeparkID) {
      this.isUsersProfile = false;
    }
    return this.http.get<BikePark>(this.url + '/details/' + id, this.httpOptions).pipe(
      tap(
        data => {
          this.bikepark = data;
          // todo delete this after backend delivers the object properly :)
          // this.bikepark.contact = {};
        },
        error => {
          console.log(error);
        }
      )
    );
    // return undefined;
  }

  initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })
      };
      this.bikeparkID = this.sessionManager.getLoggedUserId();
      this.isBikepark = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.BIKEPARK;
    } else {
      // todo redirect to login :)
    }
  }

  addRezervare(rezervareBikePark: RezervareBikePark): Observable<RezervareBikePark> {
    console.log('bikepark_id ' + this.bikepark.id);
    return this.http.post(this.url + '/rezervarebikepark/rezerva',
      {
        'bikePark': {
          'id': this.bikepark.id
        },
        'rezervareBikePark': rezervareBikePark
      },
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

  editBikepark(bikePark: BikePark): Observable<BikePark> {
    console.log('Intra in edit');
    return this.http.put(this.url + '/edit/' + bikePark.id,
      bikePark,
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
  }

  editContactBikepark(contact: Contact): Observable<Contact> {
    return this.http.put(this.url + '/edit/contact/' + this.bikepark.id,
      contact,
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
  }

  isHisProfile(): boolean {
    return this.isUsersProfile;
  }
}
