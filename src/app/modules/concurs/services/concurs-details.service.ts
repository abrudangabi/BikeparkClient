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

  public abstract findBikepark(idConcurs: number): Observable<BikePark>;

  public abstract uploadPhoto(uploadData: FormData);

  public abstract isHisProfile(): boolean;

  public abstract addRezervare(rezervareConcurs: RezervareConcurs): Observable<RezervareConcurs>;

  public abstract addCategorie(categorie: Categorie, concursId: number): Observable<Categorie>;

  public abstract editConcurs(concurs: Concurs): Observable<Concurs>;

  public abstract deleteCategorie(id: number): Observable<Categorie>;
}

export class ServerConcursDetailsService implements AbstractConcursDetailsService {
  specificID: number;
  isApplicant: boolean;
  isUsersProfile: boolean = true;
  concurs: Concurs;


  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };
  private url = 'http://localhost:8080/api';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  /*initialize() {
  }*/

  initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })
      };
      this.specificID = this.sessionManager.getSpecificId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.BIKER;
    } else {
      // todo redirect to login :)
    }

  }

  public getConcurs(concursID: string): Observable<Concurs> {
    // return null;
    return this.http.get<Concurs>(this.url + '/concurs/details/' + concursID, this.httpOptions).pipe(
      tap(() => console.log(`fetched Concurs id#${concursID}`)),
      catchError(this.handleError<Concurs>(`getConcurs failed ${concursID}`)));
  }

  public getConcursLogo(concursID: string): Observable<Photo> {
    // return null;
    return this.http.get<Photo>(this.url + '/concurs/' + concursID + '/logo', this.httpOptions).pipe(
      tap(() => console.log(`fetched ConcursLogo id#${concursID}`)),
      catchError(this.handleError<Photo>(`getConcursLogo failed ${concursID}`)));
  }

  /*public getInternshipTags(internshipID: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url + '/internship/' + internshipID + '/tags', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Tag[]>(`getInternshipLogo failed ${internshipID}`)));
  }*/

  public getConcursCategorii(concursID: string): Observable<Categorie[]> {
    // return null;
    return this.http.get<Categorie[]>(this.url + '/concurs/' + concursID + '/categorii', this.httpOptions).pipe(
      tap(() => console.log(`fetched ConcursCategorie id#${concursID}`)),
      catchError(this.handleError<Categorie[]>(`getConcursCategorie failed ${concursID}`)));
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
    return this.http.get<BikePark>(this.url + '/concurs/' + id + '/bikepark', this.httpOptions).pipe(
      tap(() => console.log(`fetched Bikepark id#${id}`)),
      catchError(this.handleError<BikePark>(`getConcursCategorie failed ${id}`)));
    // return null;
  }

  getRezervari(): RezervareConcurs[] {
    return null;
  }

  isHisProfile(): boolean {
    return this.isApplicant;
  }

  addRezervare(rezervareConcurs: RezervareConcurs): Observable<RezervareConcurs> {
    // return null;
    console.log('Se trimite spre server');
    console.log('categorie ' + rezervareConcurs.categorie +
    ' numar ' + rezervareConcurs.numar +
    ' id_concurs ' + rezervareConcurs.concurs_id);
    // rezervareConcurs.biker_id = 1;
    // rezervareConcurs.concurs_id = 1;
    return this.http.post(this.url + '/concurs/rezervareconcurs/rezerva',
      {
        'concurs': {
          'id': rezervareConcurs.concurs_id
        },
        'rezervareConcurs': rezervareConcurs
      },
      this.httpOptions
    ).pipe(
      tap(
        data => {
          // this.concurs = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  addCategorie(categorie: Categorie, concursId: number): Observable<Categorie> {
    // return null;
    return this.http.post(this.url + '/concurs/categorie/add',
      {
        'concurs': {
          'id': concursId
        },
        'categorie': categorie
      },
      this.httpOptions
    ).pipe(
      tap(
        data => {
          // this.concurs = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  editConcurs(concurs: Concurs): Observable<Concurs> {
    return this.http.put(this.url + '/concurs/edit/' + concurs.id,
      concurs,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.concurs = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  deleteCategorie(id: number): Observable<Categorie> {
    // return of(null);
    return this.http.delete<Categorie>(this.url + '/concurs/categorie/delete/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  findBikepark(idConcurs: number): Observable<BikePark> {
    return this.http.get<BikePark>(this.url + '/concurs/' + idConcurs + '/bikepark', this.httpOptions).pipe(
      tap(() => console.log(`fetched Bikepark id#${idConcurs}`)),
      catchError(this.handleError<BikePark>(`getConcursCategorie failed ${idConcurs}`)));
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
    const id = this.getRezervari().length;
    rezervareConcurs.id = id;
    /*console.log('profile: ' + this.rezervareConcurs.id + ' ' + this.rezervareConcurs.categorie + ' ' +
      +this.rezervareConcurs.numar);*/
    rezervareConcurs.id++;
    /*this.rezervareService.addRezervare(this.rezervareConcurs)
      .subscribe();*/
    console.log('vine entitatea ' + rezervareConcurs.id + ' ' + rezervareConcurs.categorie + ' '
      + rezervareConcurs.numar);
    this.rezervari.push(rezervareConcurs);
    console.log('cate sunt : ' + this.rezervari.length);
    return of(rezervareConcurs);
  }

  public getSize(): number {
    return this.categorii.length;
  }

  addCategorie(categorie: Categorie, concursId: number): Observable<Categorie> {
    let nr = this.getSize();
    nr++;
    categorie.id = nr;
    console.log('vine entitatea ' + categorie.id + ' ' + categorie.varsta + ' '
      + categorie.tipDisciplina + ' ' + categorie.dificultate + ' ' + categorie.lungime);
    this.categorii.push(categorie);
    console.log('cate sunt : ' + this.categorii.length);
    // this.getConcursCategorii('1');
    return of(categorie);
  }

  editConcurs(concurs: Concurs): Observable<Concurs> {
    return of(concurs);
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

  findBikepark(idConcurs: number): Observable<BikePark> {
    return of(this.bikepark);
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

