import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  checkLogin(server, username, password): Observable<any> {
    var LoginUrl = "http://" + server + ":4580/api/users/login"
    return this.http.post(LoginUrl, { username, password })
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }
}
