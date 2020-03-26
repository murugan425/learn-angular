import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlogger',
  templateUrl: './eventlogger.component.html',
  styleUrls: ['./eventlogger.component.scss']
})
export class EventloggerComponent implements OnInit {

  displayStatus: boolean;

  counter = 0;

  eventsLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  displaySecret() {
    this.displayStatus = !this.displayStatus;
    this.counter++;
    this.eventsLog.push(new Date());
  }
}
