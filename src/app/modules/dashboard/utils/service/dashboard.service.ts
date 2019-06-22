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

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  private url = 'http://localhost:8080/api';  // URL to web api
  private httpClient: HttpClient;
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };

  constructor(private http: HttpClient,
              private sessionManager: SessionManagementService
  ) {
    this.httpClient = http;
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
    } else {
    }
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
