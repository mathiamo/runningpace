import { Component, OnInit } from '@angular/core';
import { StravaService } from '../strava.service';
@Component({
    selector: 'app-pace',
    templateUrl: './pace.component.html',
    styleUrls: ['./pace.component.scss']
})
export class PaceComponent implements OnInit {
    errorMessage: string;
    athlete: any;
    stats: any;
    friends: any;
    constructor(private stravaService: StravaService) {}

    ngOnInit() {}
}
