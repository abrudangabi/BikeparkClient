import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Photo} from 'src/app/shared/model/Photo';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Role} from '../../../shared/model/Role';
import {Concurs} from '../../../shared/model/Concurs';
import {Categorie} from '../../../shared/model/Categorie';
import {RezervareConcurs} from '../../../shared/model/RezervareConcurs';
import {BikePark} from '../../../shared/model/BikePark';
import {User} from '../../../shared/model/User';
import {RezervareBikePark} from '../../../shared/model/RezervareBikePark';
// import * as $ from 'jquery/dist/jquery';
import * as $ from 'node_modules/jquery/dist/jquery.js';


@Injectable()
export abstract class AbstractConcursDetailsService {
  public abstract initialize();

  public abstract getConcurs(concursID: string): Observable<Concurs>;

  public abstract getConcursLogo(concursID: string): Observable<Photo>;

  // public abstract getInternshipTags(concursID: string): Observable<Tag[]>;

  public abstract getConcursCategorii(concursID: string): Observable<Categorie[]>;

  public abstract applyToConcurs(int: number): Observable<Concurs>;

  public abstract addConcurs(concurs: Concurs): Observable<Concurs>;

  public abstract getBikepark(id: number): Observable<BikePark>;

  public abstract getRezervari(): RezervareConcurs[];

  public abstract uploadPhoto(uploadData: FormData);

  public abstract isHisProfile(): boolean;

  public abstract addRezervare(rezervareConcurs: RezervareConcurs): Observable<RezervareConcurs>;

  public abstract addCategorie(categorie: Categorie): Observable<Categorie>;

  public abstract deleteCategorie(id: number): Observable<Categorie>;
}

export class ServerConcursDetailsService implements AbstractConcursDetailsService {
  specificID: number;
  isApplicant: boolean;
  isUsersProfile: boolean = true;


  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  initialize() {
  }

  /*initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          })
      };
      this.specificID = this.sessionManager.getSpecificId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.APPLICANT;
    } else {
      // todo redirect to login :)
    }

  }*/

  public getConcurs(concursID: string): Observable<Concurs> {
    return null;
    /*return this.http.get<Internship>(this.url + '/internship/details/' + internshipID, this.httpOptions).pipe(
      tap(() => console.log(`fetched Internship id#${internshipID}`)),
      catchError(this.handleError<Internship>(`getInternship failed ${internshipID}`)));*/
  }

  public getConcursLogo(concursID: string): Observable<Photo> {
    return null;
    /*return this.http.get<Photo>(this.url + '/internship/' + internshipID + '/logo', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Photo>(`getInternshipLogo failed ${internshipID}`)));*/
  }

  /*public getInternshipTags(internshipID: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url + '/internship/' + internshipID + '/tags', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Tag[]>(`getInternshipLogo failed ${internshipID}`)));
  }*/

  public getConcursCategorii(concursID: string): Observable<Categorie[]> {
    return null;
    /*return this.http.get<Skill[]>(this.url + '/internship/' + internshipID + '/skills', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Skill[]>(`getInternshipLogo failed ${internshipID}`)));*/
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  applyToConcurs(int: number): Observable<Concurs> {
    return null;
    /*return this.http.post<Internship>(this.url + '/internship/' + id + '/apply', {}, this.httpOptions).pipe(
      tap(
        () => {

        },
        error => {
          console.log(error);
        }
      )
    );*/
  }

  addConcurs(concurs: Concurs): Observable<Concurs> {
    return null;
    /*return this.http.post<Internship>(this.url + '/internship/create',
      {
        'company': {
          'id': this.specificID
        },
        'internship': internship
      },
      this.httpOptions).pipe(
      tap(
        (data) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    );*/
  }

  getBikepark(id: number): Observable<BikePark> {
    return null;
  }

  getRezervari(): RezervareConcurs[] {
    return null;
  }

  isHisProfile(): boolean {
    return false;
  }

  addRezervare(rezervareConcurs: RezervareConcurs): Observable<RezervareConcurs> {
    return null;
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    return null;
  }

  deleteCategorie(id: number): Observable<Categorie> {
    return of(null);
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
  };


}

export class MockConcursDetailsService implements AbstractConcursDetailsService {

  concurs: Concurs = {
    id: 1,
    dataStart: new Date('2018-11-16'),
    denumire: 'Thermal Enduro',
    minimParticipanti: 120,
    nrParticipanti: 150
    /*'id': 1,
    'active': true,
    'title': 'InternshipTitle',
    'description': null,
    'startDate': new Date('2018-11-16'),
    'endDate': new Date('2019-03-16'),
    'deadline': null,
    'employmentType': null,
    'freeSpots': null,
    'status': null*/
  };

  categorii: Categorie[] = [
    {
      id: 1,
      dificultate: 'usor',
      lungime: 1800,
      tipDisciplina: 'XC',
      varsta: '14-18'
    },
    {
      id: 2,
      dificultate: 'usor',
      lungime: 1500,
      tipDisciplina: 'XC',
      varsta: '14-18'
    }
  ];

  userB: User = {
    id: 1,
    active: true,

    email: 'crater_betfia@yahoo.com',

    password: 'balala',

    // roles: RoleStringEnum.BIKEPARK,

    username: 'crater_betfia',
  };

  bikepark: BikePark = {
    id: 1,
    denumire: 'Crater Betfia',
    telescaun: false,
    nrLocuri: 200,
    user: this.userB,
    descriere: 'ceva in rusa "Cyka Blyat" '
  };

  rezervari: RezervareConcurs[] = [];

  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};

  public getConcurs(concursID: string): Observable<Concurs> {
    return of(this.concurs);
  }

  getBikepark(id: number): Observable<BikePark> {
    return of(this.bikepark);
  }

  getRezervari(): RezervareConcurs[] {
    return this.rezervari;
  }

  uploadPhoto(uploadData: FormData) {
  }

  public getConcursLogo(concursID: string): Observable<Photo> {
    return of(this.photo1);
    throw new Error('Method not implemented.');
  }

  /*public getInternshipTags(internshipID: string): Observable<Tag[]> {
    throw new Error('Method not implemented.');
  }*/

  public getConcursCategorii(concursID: string): Observable<Categorie[]> {
    return of(this.categorii);
    throw new Error('Method not implemented.');
  }

  isHisProfile(): boolean {
    return false;
  }

  addRezervare(rezervareConcurs: RezervareConcurs): Observable<RezervareConcurs> {
    console.log('vine entitatea ' + rezervareConcurs.id + ' ' + rezervareConcurs.categorie + ' '
      + rezervareConcurs.numar);
    this.rezervari.push(rezervareConcurs);
    console.log('cate sunt : ' + this.rezervari.length);
    return of(rezervareConcurs);
  }

  public getSize(): number {
    return this.categorii.length;
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    let nr = this.getSize();
    nr++;
    categorie.id = nr;
    console.log('vine entitatea ' + categorie.id + ' ' + categorie.varsta + ' '
      + categorie.tipDisciplina + ' ' + categorie.dificultate + ' ' + categorie.lungime);
    this.categorii.push(categorie);
    console.log('cate sunt : ' + this.categorii.length);
    this.getConcursCategorii('1');
    return of(categorie);
  }

  deleteCategorie(id: number): Observable<Categorie> {
    let categ: Categorie = null;
    for (let i = 0; i <= this.categorii.length - 1; i++) {
      if (this.categorii[i].id === id) {
        categ = this.categorii[i];
        this.categorii.splice(i, 1);
      }
    }
    return of(categ);
  }

  /*deleteEducation(id: number): Observable<Applicant> {
    let i = this.educations.length;
    while (i--) {
      if (this.educations[i].id === id) {
        this.educations.splice(i, 1);
      }
    }
    return of(this.applicant);
  }*/

  applyToConcurs(int: number): Observable<Concurs> {
    return of({});
  }

  initialize() {
  }

  addConcurs(concurs: Concurs): Observable<Concurs> {
    return of({});
  }
}

