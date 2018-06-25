
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class StravaService {
    private apiURL = 'https://www.strava.com/api/v3/';
    private token = 'token';
    constructor (private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.token);
  }

  getAthlete(): Observable<any> {
    const url = `${this.apiURL}/athlete`;
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getStats(id: number): Observable<any> {
    const url = `${this.apiURL}/athletes/${id}/stats`;
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    getSegmentleaderboard(id: number): Observable<any> {
        const url = `${this.apiURL}/segments/${id}/leaderboard`;
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError);

    }
    getGear(id: number): Observable<any> {
        const url = `${this.apiURL}/gear/${id}`;
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError);

    }
  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
