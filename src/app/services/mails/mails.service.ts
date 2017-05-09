import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MailService {
  private _hostName: string;

  constructor(private http: Http) {
    this._hostName = location.hostname;
  }
  getMails(userName:string): Observable<any> {
    var serverAddress = localStorage.getItem("serverName");
    var host = location.hostname;
    var getMailURL = "http://" + host + ":4580/userPortal/GetEmailSanitizations";

    return this.http.get(getMailURL,{params:{UserName:userName}})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }

  getEmailFilterResults(filterQuery : any){
    var getMailURL = "http://" + this._hostName + ":4580/api/report/GetSanitizations/?q=1";

    return this.http.get(getMailURL, { search: filterQuery })
      .map(
        (res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, get getEmailFilterResults failed'));
  }
}
