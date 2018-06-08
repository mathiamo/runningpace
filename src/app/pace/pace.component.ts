import { Component, OnInit, Pipe } from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
import * as moment from 'moment';
@Component({
  selector: 'app-pace',
  templateUrl: './pace.component.html',
  styleUrls: ['./pace.component.scss']
})
@Pipe({
  name: 'minuteSeconds'
})
export class PaceComponent implements OnInit {
  pacetitle = "Pace Calculator";
  minutes: "0";
  seconds: "0";
  events = [
    { value: 1.5, viewValue: '1500M' },
    { value: 3, viewValue: '3km' },
    { value: 5, viewValue: '5km' },
    { value: 10, viewValue: '10km' },
    { value: 21, viewValue: 'Halvmaraton' },
    { value: 42, viewValue: 'Maraton' },
   
  ];
  selectedEvent = "";
  eventTime = ""
  selectedValue: number = this.events[0].value;
  
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedEvent = event.target.value;
  };
  eventTimeCalc(event: any) {
    var totalSeconds = (parseInt(this.minutes)*60 + parseInt(this.seconds));
   
    this.eventTime = moment().startOf("day").seconds(totalSeconds*event.target.value).format('HH:mm:ss');
  };

  constructor() {
  }

  ngOnInit() {
    this.selectedEvent;
  }

}
