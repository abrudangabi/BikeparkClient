import {ChangeDetectorRef, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BikePark} from '../../../shared/model/BikePark';
import {Photo} from '../../../shared/model/Photo';
import {Locatie} from '../../../shared/model/Locatie';
import {Contact} from '../../../shared/model/Contact';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {tap} from 'rxjs/operators';
import {Traseu} from '../../../shared/model/Traseu';
import {RezervareBikePark} from '../../../shared/model/RezervareBikePark';
import {Categorie} from '../../../shared/model/Categorie';
import {Role} from '../../../shared/model/Role';

@Injectable()
export abstract class AbstractTraseuService {

  public abstract getTrasee(idBikepark: number): Observable<Traseu[]>;

  /*public abstract getDenumire(): string[];

  public abstract setNameFilters(filters: string[]): void;

  public abstract getNameFilters(): string[];*/

  public abstract addTraseu(traseu: Traseu, bikepark: BikePark): Observable<Traseu>;

  public abstract deleteTraseu(id: number): Observable<Traseu>;

  public abstract initialize();

  public abstract isHisProfile(): boolean;
}

export class MockTraseuService implements AbstractTraseuService {

  private trasee: Traseu[] = [
    {
      id: 1,
      denumire: 'Pe Val',
      dificultate: 'usor',
      lungime: 1800,
      tipTraseu: 'XC'
    },
    {
      id: 2,
      denumire: 'Step',
      dificultate: 'mediu',
      lungime: 900,
      tipTraseu: 'Enduro'
    },
    {
      id: 3,
      denumire: 'Camber',
      dificultate: 'greu',
      lungime: 700,
      tipTraseu: 'Downhill'
    }
  ];

  traseu: Traseu;

  constructor() {
  }

  public getSize(): number {
    return this.trasee.length;
  }

  public getTrasee(idBikepark: number): Observable<Traseu[]> {
    return of(this.trasee.slice());
  }

  addTraseu(traseu: Traseu, bikepark: BikePark): Observable<Traseu> {
    /*let nr ;
    this.getTrasee(1)
       .subscribe(() => {
         nr = this.getTrasee(1);
       });*/
    let nr = this.getSize();
    nr++;
    traseu.id = nr;
    console.log('vine entitatea ' + traseu.id + ' ' + traseu.denumire + ' '
      + traseu.dificultate + ' ' + traseu.tipTraseu + ' ' + traseu.lungime);
    this.trasee.push(traseu);
    console.log('cate sunt : ' + this.trasee.length);
    this.getTrasee(1);
    this.trasee;
    return of(traseu);
  }

  deleteTraseu(id: number): Observable<Traseu> {
    console.log('Ajunge la delete in service');
    let tr: Traseu = null;
    for (let i = 0; i <= this.trasee.length - 1; i++) {
      if (this.trasee[i].id === id) {
        tr = this.trasee[i];
        this.trasee.splice(i, 1);
      }
    }
    return of(tr);
  }

  /*public getDenumire(): string[] {
    return this.bikeparkName;
  }

  setNameFilters(filters: string[]) {
    this.nameFilters = filters;
  }

  getNameFilters(): string[] {
    return this.nameFilters;
  }*/

  isHisProfile(): boolean{
    return true;
  }

  public initialize() {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServerTraseuService implements AbstractTraseuService {

  // bikeparks: BikePark[];
  trasee: Traseu[];
  distance: number;
  bikeparkID: number;
  isBikepark: boolean;

  traseu: Traseu;
  // trasee: Traseu[];

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };

  // private companiesName: string[] = [];
  nameFilters: string[] = [];

  private url = 'http://localhost:8080/api/bikepark';

  // private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  addTraseu(traseu: Traseu, bikepark: BikePark): Observable<Traseu> {
    // return null;
    return this.http.post(this.url + '/add/traseu',
      {
        'bikePark': {
          'id': bikepark.id
        },
        'traseu': traseu
      },
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.traseu = data;
        },
        error => {
          console.log(error);
        }
      )
    );
    // return undefined;
  }

  /*public initialize() {
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
      this.bikeparkID = this.sessionManager.getLoggedUserId();
      /*this.sessionManager.getLoggedUserRole().subscribe(data => {
        this.isBikepark = data == Role.RoleStringEnum.BIKEPARK;
      })*/
      this.isBikepark = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.BIKEPARK;
    }
  }

  public getTrasee(idBikepark: number): Observable<Traseu[]> {
    // return null;
    return this.http.get<Traseu[]>(this.url + '/traseu/' + idBikepark, this.httpOptions).pipe(
      tap(
        data => {
          this.trasee = data;
          console.log('cate trasee sunt : ' + this.trasee.length);
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  deleteTraseu(id: number): Observable<Traseu> {
    return this.http.delete<Traseu>(this.url + '/traseu/delete/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  isHisProfile(): boolean{
    return !this.isBikepark;
  }

  /*public getDenumire(): string[] {
    for (let i = 0; i < this.bikeparks.length; i++) {
      this.companiesName.push(this.bikeparks[i].denumire);
    }
    return this.companiesName.slice();
  }*/

  setNameFilters(filters: string[]) {
    this.nameFilters = filters;
  }

  getNameFilters(): string[] {
    return this.nameFilters;
  }
}
