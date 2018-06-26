import { Component, OnInit } from '@angular/core';
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
    constructor() {}

    ngOnInit() {}
}
