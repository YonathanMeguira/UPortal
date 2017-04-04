import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MailService {
  constructor(private http: Http) { }
  getMails(userName:string): Observable<any> {
    var serverAddress = localStorage.getItem("serverName");
    var host = location.hostname;
    var getMailURL = "http://" + host + ":4580/api/report/GetEmailSanitizations";

    return this.http.get(getMailURL,{params:{UserName:userName}})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }
}
