import { Component, OnInit } from '@angular/core';
import { StravaService } from '../strava.service';
import * as moment from 'moment';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-strava-stats',
    templateUrl: './strava-stats.component.html',
    styleUrls: ['./strava-stats.component.scss']
})
export class StravaStatsComponent implements OnInit {
    errorMessage: string;
    athlete: any;
    stats: any;
    friends: any;
    efforts: any;
    effort = [];
    lineChartData = [];
    lineChartLabels = [];
    chart = [];
    shoeName: string;
    shoeDistance: number;
    shoes = [

    ];

    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
    constructor(private stravaService: StravaService) {}

    ngOnInit() {
        this.getAthlete();
        this.getEfforts();
    }

    getEfforts() {
        this.stravaService.getSegmentEfforts(660072).subscribe(efforts => {
            this.efforts = this.sortByProp(efforts, 'start_date');
            efforts.map(effort => {
                this.effort.push(this.toMoment(effort.elapsed_time));
                this.lineChartLabels.push(this.toMoment(effort.elapsed_time));
                this.chart = new Chart('canvas', {
                    type: 'line',
                    data: {
                      labels: this.lineChartLabels,
                      datasets: [
                        {
                          data: this.effort,
                          borderColor: '#3cba9f',
                          fill: false
                        }
                      ]
                    },
                    options: {
                        events: [],
                      legend: {
                        display: false
                      },
                      scales: {
                        xAxes: [{
                            display: true
                          }],

                        yAxes: [{
                            type: 'time',
                            time: {
                              parser: 'mm:ss',
                              unit: 'second',
                              unitStepSize: 20,
                              displayFormats: {
                                'second': 'mm:ss',
                                'minute': 'mm:ss',
                              },
                              min: '04:20',
                              max: '10:30'
                          }}],
                      }
                    }
                  });
            });
        }, error => (this.errorMessage = <any>error));

    }

    getAthlete() {
        this.stravaService.getAthlete().subscribe(athlete => {
            this.athlete = athlete;
            this.getStats(athlete.id);
        }, error => (this.errorMessage = <any>error));
    }

    getStats(id) {
        this.stravaService
            .getStats(id)
            .subscribe(
                stats => (this.stats = stats),
                error => (this.errorMessage = <any>error)
            );
    }

    toMoment(seconds) {
        return moment.utc(seconds * 1000).format('mm:ss');
    }
    sortByProp(array, prop: string) {
        array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }
}
