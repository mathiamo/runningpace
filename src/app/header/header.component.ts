import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, style, state } from '@angular/animations';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    // Add this:
    animations: [
        trigger('divState', [
            state(
                'normal',
                style({
                    'background-color': 'red',
                    transform: 'translateX(0)'
                })
            ),
            state(
                'highlighted',
                style({
                    'background-color': 'blue',
                    transform: 'translateX(100px)'
                })
            )
        ])
    ]
})
export class HeaderComponent implements OnInit {
    state: 'normal';
    currentUrl: string;

    constructor(router: Router) {
        router.events.subscribe(
            (_: NavigationEnd) => (this.currentUrl = _.url)
        );
    }

    ngOnInit() {}
}
