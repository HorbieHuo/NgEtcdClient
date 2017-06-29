import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EtcdService {

  private _urlPrefix = "http://172.16.12.222:2379/v2/keys";

  constructor(private http: Http) { }

  public Get(): Observable<any> {
    console.log("public Get(): Observable<any>");
    console.log(this._urlPrefix);
    let params: URLSearchParams = new URLSearchParams();
    params.set("recursive", "true");
    let options: RequestOptions = new RequestOptions();
    options.search = params;
    return this.http.get(this._urlPrefix, options).map(
      response => {console.log(response.json().data); return response.json().data;},
      error => console.log(error)
    )//.catch(
    //   error => {console.log(error); return error;}
    // )
  }

}
