import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-pace-calc',
  templateUrl: './pace-calc.component.html',
  styleUrls: ['./pace-calc.component.scss']
})

export class PaceCalcComponent implements OnInit {
  pacetitle = "Pace Calculator";
  minutes: "0";
  seconds: "0";
  events = [
    { value: 400, viewValue: '400M' },
    { value: 800, viewValue: '800M' },
    { value: 1500, viewValue: '1500M' },
    { value: 1609, viewValue: '1609M' },
    { value: 3000, viewValue: '3km' },
    { value: 5000, viewValue: '5km' },
    { value: 10000, viewValue: '10km' },
    { value: 21097.5, viewValue: 'Halvmaraton' },
    { value: 42195, viewValue: 'Maraton' },
   
  ];
  selectedEvent: number= 400;
  eventTime = ""
  selectedValue = this.events[0].viewValue;
  
  selectChangeHandler(event: any) {
    //update the ui
      console.log(event.target.value);
        this.selectedEvent = event.target.value;
  };
  eventTimeCalc(event: any) {
    console.log(event);
    var totalSeconds = (parseInt(this.minutes)*60 + parseInt(this.seconds));
   
    this.eventTime = moment().startOf("day").seconds(totalSeconds*(this.selectedEvent/1000)).format('HH:mm:ss');
  };

  constructor() {
  }

  ngOnInit() {
  }

}

