import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagementService} from '../../../../shared/utils/session-management.service';
import {Company} from '../../../../shared/model/Company';
import {Observable} from 'rxjs';
import {Applicant} from '../../../../shared/model/applicant';
/*import {Skill} from '../../../../shared/model/Skill';
import {InternshipDTO} from '../../../../shared/model/InternshipDTO';
import {Internship} from '../../../../shared/model/InternshipEnums';*/
import {Biker} from '../../../../shared/model/Biker';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {RezervareBikeparkDTO} from '../../../../shared/model/RezervareBikeparkDTO';
import {Role} from '../../../../shared/model/Role';
import {BikePark} from '../../../../shared/model/BikePark';
import {tap} from 'rxjs/operators';
import {Contact} from '../../../../shared/model/Contact';
import {Locatie} from '../../../../shared/model/Locatie';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  private url = 'http://localhost:8080/api';  // URL to web api
  //private httpClient: HttpClient;
  applicantID: number;
  isApplicant: boolean;
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': '' + this.sessionManager.getToken()
        // 'Authorization': 'Bearer x'
      })
  };

  constructor(private http: HttpClient,
              private sessionManager: SessionManagementService
  ) {
    //this.httpClient = http;
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
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.BIKER;
      /*this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })

      };*/
    } else {
    }
  }

  editBiker(biker: Biker): Observable<Biker> {
    console.log('Intra in edit');
    return this.http.put(this.url + '/biker/edit/' + biker.id,
      biker,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          // this.bikepark = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  editBikerContact(contact: Contact): Observable<Contact> {
    console.log('Intra in edit');
    return this.http.put(this.url + '/biker/edit/contact/' + contact.id,
      contact,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          //this.bikepark = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  editBikerAddress(locatie: Locatie): Observable<Locatie> {
    console.log('Intra in edit');
    return this.http.put(this.url + '/biker/edit/locatie/' + locatie.id,
      locatie,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          // this.bikepark = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  /*getAllSkills(): Observable<Skill[]>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.sessionManager.getToken()
        })
    };
    return this.http.get<Skill[]>(this.url + '/skill/all',httpOptions);
  }

  getFirst3Companies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + '/company/sorted/dimension/5', this.httpOptions);
  }

  getBiker(): Observable<Biker> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.sessionManager.getToken()
        })
    };
    return this.http.get<Biker>(this.url + '/user/biker/' +
      this.sessionManager.getLoggedUserId(), httpOptions);
  }

  getApplicantSkills(): Observable<Skill[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.sessionManager.getToken()
        })
    };
    return this.http.get<Skill[]>(this.url + '/applicant/' + this.sessionManager.getSpecificId() + '/skills', httpOptions);
  }

  getInternshipBySkills(skills: Skill[]): Observable<Internship[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.sessionManager.getToken()
        })
    };
    return this.http.post<Internship[]>(this.url + '/internship/all/tags/lastweek', skills, httpOptions);
  }

  getAllRezervariBikepark(): Observable<RezervareBikeparkDTO[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.sessionManager.getToken()
        })
    };
    return this.http.get<RezervareBikeparkDTO[]>(this.url + '/internship/allinternships', httpOptions);
  }*/
}
