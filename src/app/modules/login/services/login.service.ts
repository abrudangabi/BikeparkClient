import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import {FormsModule} from '@angular/forms';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Applicant} from '../../../shared/model/applicant';
import {tap} from 'rxjs/operators';

@Injectable()
export abstract class AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  public abstract login(username: String, password: String);

  public logout() {

  }
}


export class MockLoginService implements AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  login(username: String, password: String) {
    return new Promise((resolve, reject) => {
      if (username === 'test' && password === 'test') {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  logout() {
  }

}

export class ServerLoginService implements AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  // http://localhost:8080/api/bikepark
  // url = 'http://localhost:8080/oauth/token';
  url = 'http://proiectbikeparkreserve.herokuapp.com/oauth/token';
  // url = 'https://proiectbikepark.herokuapp.com/oauth/token';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA'
      })
  };

  constructor(private http: HttpClient,
              private sessionManagementService: SessionManagementService) {
    sessionManagementService.isLoginDataLoadingFinished.subscribe((booleanResponse) => {
      this.loginProcessFinished.emit(booleanResponse);
    }, (error) => {
      console.log(error);
      this.loginProcessFinished.emit(false);
    });
  }

  login(username: string, password: string) {
    console.log('username ' + username);
    console.log('parola ' + password);

    /*this.anotherLogin(username,password).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })*/


    const data = new FormData();
    data.append('username', '' + username);
    data.append('password', '' + password);
    data.append('grant_type', 'password');

    /*return this.http.post<any>(this.url + `/`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));*/
    /*return this.http.post(this.url ,
      /!*{
        'username': username,
        'password': password,
        'grant_type': 'password'
      },*!/
      JSON.stringify(data),
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.sessionManagementService.setToken(data.access_token);
          // resolve(true);
          // this.traseu = data;
        },
        error => {
          console.log(error);
        }
      )
    );*/

    return new Promise((resolve, reject) => {
      /*const data = new FormData();
      data.append('username', '' + username);
      data.append('password', '' + password);
      data.append('grant_type', 'password');
      console.log('Du-te baaa ' + data.get('username'));*/
      const sessionManagementServiceUnnecessaryCopy = this.sessionManagementService;
      const loginProcessFinishedUnnecessaryCopy = this.loginProcessFinished;
      $.ajax({
        // url: 'http://localhost:8080/oauth/token',
        url: 'https://cors-anywhere.herokuapp.com/https://proiectbikeparkreserve.herokuapp.com/oauth/token',
        // url: 'https://cors-anywhere.herokuapp.com/https://enigmatic-sierra-91538.herokuapp.com/oauth/token',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          /*'Access-Control-Allow-Origin': 'http://webdavserver.com',
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Methods':'POST',
          'Access-Control-Expose-Headers': 'DAV, content-length, Allow',*/
          /*'Access-Control-Allow-Headers':
            'Overwrite, Destination, Content-Type, Depth, User-Agent, Translate,
            Range, Content-Range, Timeout, X-File-Size, X-Requested-With, If-Modified-Since,
            X-File-Name, Cache-Control, Location, Lock-Token, If'*/
          // 'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/x-www-form-urlencoded'
          /*'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'POST',
          'Access-Control-Allow-Headers':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'*/
        },
        // dataType: 'json',
        data: data,
        contentType: false,
        processData: false,
        /*crossOrigin: true,
        crossDomain: true,
        contentType: false,
        processData: false,*/
        type: 'POST',
        success: function(response: any) {
          console.log('Raspuns '+response);
          sessionManagementServiceUnnecessaryCopy.setToken(response.access_token);
          resolve(true);
        },
        error: function(request, status, error) {
          console.log('Raspuns '+error + status + request);
          loginProcessFinishedUnnecessaryCopy.emit(false);
          reject(false);
        }
      });
    });
    // this.sessionManagementService.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiZ2FiaSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTEzMDIwMjIsImF1dGhvcml0aWVzIjpbIkJJS0VSIl0sImp0aSI6IjVlMDJiMzc2LThmM2ItNDljMS1hYmU0LTdkYThmYmNiMjY2OCIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.irdkMdCcqAFaSItA7y-jDqE8LQ0-Crjvg0xPSuQOylU')

  }

  logout() {
  }


  anotherLogin(username: string, password: string) {
    return new Promise((resolve, reject) => {
      $.ajax
      ({
        type: 'POST',
        //the url where you want to sent the userName and password to
        url: this.url,
        contentType:'application/json',
        async: true,
        //json object to sent to the authentication url
        data: JSON.stringify({username:username,password:password}),
        success: function(result) {
          resolve(result);
        },
        failure:function(error){
          reject(error);
        }
      });
    });
  }
}
