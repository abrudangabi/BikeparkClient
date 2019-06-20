import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Biker} from '../../../shared/model/Biker';

@Injectable()
export abstract class AbstractRegisterService {

  authToken: String;

  public abstract register(username: String,
                           password: String,
                           email: String,
                           firstName: String,
                           lastName: String): Observable<Biker>;
}


export class MockRegisterService implements AbstractRegisterService {
  authToken = ' ';

  register(username: String, password: String, email: String, firstName: String, lastNameString: String): Observable<Biker> {
    // todo
    if (username !== '') {
      return of(null);
    } else {
      return of(null);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServerRegisterService implements AbstractRegisterService {
  authToken = ' ';
  // http://localhost:8080/api/bikepark
  private url = 'http://localhost:8080/register/biker';

  constructor(private http: HttpClient) {
  }

  register(username: String, password: String, email: String, firstName: String, lastName: String): Observable<Biker> {
    return this.http.post<Biker>(this.url, {
      'user': {
        'email': email,
        'password': password,
        'username': username
      },
      'biker': {
        'prenume': firstName,
        'nume': lastName
      }
    }).pipe(
      tap(
        () => {
        },
        error => {
          console.log(error);
        }
      )
    );
  }
}
