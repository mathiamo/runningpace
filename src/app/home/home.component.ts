import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    homeTitle = 'Pacekalkulator';
    homeIngress =
        'Denne kan du bruke for å regne ut slutttid på forskjellige distanser';

}
