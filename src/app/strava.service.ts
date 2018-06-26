import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable()
export class StravaService {
    private apiURL = 'https://www.strava.com/api/v3/';
    private token = environment.stravaApiToken;
    constructor(private httpClient: HttpClient) {}

    setStravaAuth() {
        return new HttpHeaders({ Authorization: 'Bearer ' + this.token });
  }

  getAthlete(): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/athlete`, {
            headers: this.setStravaAuth()
        });
  }

  getStats(id: number): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/athletes/${id}/stats`, {
            headers: this.setStravaAuth()
        });
  }

    getSegmentEfforts(id: number): Observable<any> {
        return this.httpClient.get(
            `${this.apiURL}/segments/${id}/all_efforts`, {
                headers: this.setStravaAuth(),
                params : {'per_page' : '200'} }
        );
    }
    getGear(id: number): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/gear/${id}`, {
            headers: this.setStravaAuth()
        });
  }
}
