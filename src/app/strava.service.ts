import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class StravaService {
    private apiURL = 'https://www.strava.com/api/v3/';
    private token = '9d5b06100923f8e94627f0976f877f504aef9be8';
    constructor(private http: HttpClient) {}

    createAuthorizationHeader(headers: HttpHeaders) {
        headers.append('Authorization', 'Bearer ' + this.token);
    }

    getAthlete() {
        const url = `${this.apiURL}/athlete`;
        const headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);

        return this.http
            .get(url, { headers: headers })
            .pipe(map(this.extractData));
    }

    getStats(id: number) {
        const url = `${this.apiURL}/athletes/${id}/stats`;
        const headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);

        return this.http
            .get(url, { headers: headers })
            .pipe(map(this.extractData))
            .subscribe(
                data => console.log('success', data),
                error => console.log('oops', this.handleError)
              );
    }

    getFriends(id: number) {
        const url = `${this.apiURL}/athletes/${id}/friends`;
        const headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);

        return this.http
            .get(
                url,
                { headers: headers }
            )
            .pipe(
                map(this.extractData)
            )
            .subscribe(
                data => console.log('success', data),
                error => console.log('oops', this.handleError)
              );
    }

    private extractData(res: HttpResponse<JSON>) {
        const body = res.body;
        return body || {};
    }

    private handleError(error: HttpResponse<JSON> | any) {
        let errMsg: string;

        if (error instanceof catchError) {
            const body = error.error || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
