import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class Users {
  constructor(private http: Http) { }
  login(server, username, password): Observable<any> {
    var LoginUrl = "http://" + server + ":4580/userPortal/login"
    return this.http.post(LoginUrl, { username, password })
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }
  logout(): Observable<any> {
    var ServerName = localStorage.getItem("serverName")
    var LogoutUrl = "http://" + ServerName + ":4580/api/users/logout"
    return this.http.post(LogoutUrl, {})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not logout'));
  }
}
