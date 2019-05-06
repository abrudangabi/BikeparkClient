import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Role} from '../../../shared/model/Role';
import {tap} from 'rxjs/operators';
import {BikeparkReservationRequest} from '../../../shared/model/BikeparkReservationRequest';
import {Biker} from '../../../shared/model/Biker';
import {RezervareBikePark} from '../../../shared/model/RezervareBikePark';
import {BikePark} from '../../../shared/model/BikePark';
import {Contact} from '../../../shared/model/Contact';
import * as models from '../../../shared/model/BikePark';
import {Locatie} from '../../../shared/model/Locatie';
import {Photo} from '../../../shared/model/Photo';
import {User} from '../../../shared/model/User';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractBikeparksForDashboardServicesService {
  rezervareList: BikeparkReservationRequest[];

  public abstract initialize();

  public abstract getRezervariBikeparkForBiker(): Observable<BikeparkReservationRequest[]> ;

  public abstract getRezervari(): Observable<RezervareBikePark[]> ;

  public abstract getBiker(): Biker ;

  public abstract getBikepark(): BikePark ;

  public abstract uploadPhoto(uploadData: FormData);

  public abstract cancelInternship(id: number);
}

// todo mock
export class MockBikeparksForDashboardServicesService implements AbstractBikeparksForDashboardServicesService {

  photo1: Photo = {
    id: 1,
    url: 'https://i.ytimg.com/vi/TLERVskCk8I/maxresdefault.jpg'
  };
  userB: User = {
    id: 1,
    active: true,
    email: 'crater_betfia@yahoo.com',
    password: 'balala',
    // roles: RoleStringEnum.BIKEPARK,
    username: 'crater_betfia',
  };
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
  contact1: Contact = {
    id: 1,
    locatie: this.locatie1,
    photo: this.photo1,
    phoneNumber: '0771607423',
    website: 'https://www.dirtbike.ro/',
    facebookLink: 'Crater-Betfia'
  };
  bikepark1: BikePark = {
    id: 1,
    denumire: 'Crater Betfia',
    telescaun: false,
    nrLocuri: 200,
    contact: this.contact1,
    user: this.userB,
    descriere: 'ceva in rusa "Cyka Blyat" '
  };

  bikepark2: BikePark = {
    id: 2,
    denumire: 'Whistler'
  };
  userP: User = {
    id: 1,
    active: true,
    email: 'crater_betfia@yahoo.com',
    password: 'balala',
    // roles: RoleStringEnum.BIKEPARK,
    username: 'crater_betfia',
  };
  locatie: Locatie = {
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
  photo: Photo = {
    id: 1,
    /*url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9huLXBGkrH' +
      'M%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9huLXBGk' +
      'rHM&docid=cbKelf0A81jgfM&tbnid=aiFfb8VoxxE2NM%3A&vet=10ahUKEwjz5ubZ7PfhAhUhxqYKHTAQAP' +
      '8QMwhiKBgwGA..i&w=1280&h=720&safe=off&bih=654&biw=1366&q=jason%20lucas%20ifht&ved=0ahUK' +
      'Ewjz5ubZ7PfhAhUhxqYKHTAQAP8QMwhiKBgwGA&iact=mrc&uact=8'*/
    // url: 'data:image/jpeg;base64,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'
    // url: 'https://i.ytimg.com/vi/9f2BtQuvB6E/maxresdefault.jpg'
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IfswgiLi4xfmqTrYFjXjKEhUuHVhVtbW0F5SE9cQCryl7qPj'
    // url: 'https://i.ytimg.com/vi/TLERVskCk8I/maxresdefault.jpg'
  };
  contact: Contact = {
    id: 1,
    locatie: this.locatie,
    photo: this.photo,
    phoneNumber: '0771607423',
    website: 'https://www.dirtbike.ro/',
    facebookLink: 'Crater-Betfia'
  };
  newDate1 = new Date('1968-11-16T00:00:00');
  newDate2 = new Date('1968-11-16T00:00:00');
  biker: Biker = {
    id: 1,
    aniExperienta: 2,
    bicicleta: 'Trek',
    contact: this.contact,
    dataNasterii: this.newDate1,
    disciplinaFavorita: 'Enduro',
    membruData: this.newDate2,
    nume: 'Abrudan',
    prenume: 'Gabi',
    user: this.userP,
  };
  rez1: RezervareBikePark = {
    id: 1,
    ziua: 'Mon Apr 29 2019',
    biker_id: 1,
    bikepark_id: 1,
    numeBikepark: this.bikepark1.denumire
  };
  rez2: RezervareBikePark = {
    id: 2,
    ziua: 'Mon Apr 30 2019',
    biker_id: 1,
    bikepark_id: 2,
    numeBikepark: this.bikepark2.denumire
  };
  rezervareList: BikeparkReservationRequest[] = [
    {
      id: 1,
      biker: this.biker,
      rezervareBikepark: this.rez1
    },
    {
      id: 2,
      biker: this.biker,
      rezervareBikepark: this.rez2
    }
  ];

  initialize() {
  }

  getRezervariBikeparkForBiker(): Observable<BikeparkReservationRequest[]> {
    console.log('Lungimea dashboard in service ' + this.rezervareList.length);
    return of(this.rezervareList);
  }

  getBiker(): Biker {
    return this.biker;
  }

  getBikepark(): BikePark {
    return this.bikepark1;
  }

  getRezervari(): Observable<RezervareBikePark[]> {
    let rezervariSimple: RezervareBikePark[] = [];
    for (let i = 0; i < this.rezervareList.length; i++){
      rezervariSimple.push(this.rezervareList[i]);
    }
    /*for (let i = 0; i < rezervariSimple.length; i++){
      console.log('Ce trimite la message ' + rezervariSimple[i].ziua);
    }*/
    return of(rezervariSimple);
  }

  uploadPhoto(uploadData: FormData) {
    return new Promise((resolve, reject) => {
      /*const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/company/' + this.bikepark.id + '/photo';
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
      });*/
    });
  }

  cancelInternship(id: number) {
  }

}


@Injectable({
  providedIn: 'root'
})
export class ServerBikeparksForDashboardServicesService implements AbstractBikeparksForDashboardServicesService {
  rezervareList: BikeparkReservationRequest[];
  applicantID: number;
  isApplicant: boolean;
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
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
      this.applicantID = this.sessionManager.getLoggedUserId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.APPLICANT;
    } else {
      // todo redirect to login :)
    }
  }

  getRezervariBikeparkForBiker(): Observable<BikeparkReservationRequest[]> {
    return this.http.get<BikeparkReservationRequest[]>(this.url + '/applicant/internshipRequests', this.httpOptions).pipe(
      tap(
        data => {
          this.rezervareList = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getBiker(): Biker {
    return null;
  }

  getBikepark(): BikePark {
    return null;
  }

  getRezervari(): Observable<RezervareBikePark[]> {
    return null;
  }

  uploadPhoto(uploadData: FormData) {
  }

  cancelInternship(id: number) {
  }

}
