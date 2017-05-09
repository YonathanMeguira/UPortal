import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SanitizationService {
  private _hostName: string;

  constructor(private http: Http) {
    this._hostName = location.hostname;
  }
  getSanitizations(userName:string): Observable<any> {
    var getMailURL = "http://" + this._hostName + ":4580/api/report/GetSanitizations";

    return this.http.get(getMailURL,{params:{UserName:userName}})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, get sanitizations failed'));
  }

  getSanitizationsFilterFields(): Observable<any> {
    var getFilterFieldURL = "http://" + this._hostName + ":4580/api/jsonserver/sanitizations?q=sanitization_filter_fields";

    return this.http.get(getFilterFieldURL)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, get sanitizationsFilter failed'));
  }

  getComputerFields() {
    var getAdMachinesURL = "http://" + this._hostName + ":4580/api/users/getadmachines";

    return this.http.get(getAdMachinesURL)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, get sanitizationsFilter failed'));
  }

  getEmailFilterResults(filterQuery : any){
    var getMailURL = "http://" + this._hostName + ":4580/api/report/GetSanitizations/?q=1";

    let params: URLSearchParams = new URLSearchParams();
    Object.keys(filterQuery).forEach((key)=>{
      params.set(key, filterQuery[key])
    });

    return this.http.get(getMailURL, { search: filterQuery })
      .map(
        (res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, get getEmailFilterResults failed'));
  }
}
