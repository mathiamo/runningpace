import { Component } from '@angular/core';
import * as moment from 'moment';
import { RunningEvent } from '../runningEvent.model';

@Component({
  selector: 'app-pace-calc',
  templateUrl: './pace-calc.component.html',
  styleUrls: ['./pace-calc.component.scss']
})

export class PaceCalcComponent {
  pacetitle = 'Pace Calculator';
  minutes: '';
  seconds: '';
  eventTime = '';
  paceSelected = false;


  constructor() {}

  events: RunningEvent[] = [
    new RunningEvent('200M', 200),
    new RunningEvent('400M', 400),
    new RunningEvent('800M', 800),
    new RunningEvent('1500M', 1500),
    new RunningEvent('1Mile', 1609),
    new RunningEvent('3km', 3000),
    new RunningEvent('5km', 5000),
    new RunningEvent('10km', 10000),
    new RunningEvent('Halvmaraton', 21097.5),
    new RunningEvent('Maraton', 42195),
  ];
  selectedEvent = this.events[0].raceLength;
  selectedValue = this.events[0].raceName;

  selectChangeHandler(event: any) {
    this.selectedEvent = event.target.value;
    this.selectedValue = event.target.selectedOptions[0].label;
  }
  eventTimeCalc() {
    const totalSeconds = (parseInt(this.minutes, 10) * 60 + parseInt(this.seconds, 10));
    this.eventTime = moment().startOf('day').seconds(totalSeconds * (this.selectedEvent / 1000)).format('HH:mm:ss');
    this.paceSelected = true;
  }

}

