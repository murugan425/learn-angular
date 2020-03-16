import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  arr = Array;

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
