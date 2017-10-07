import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventfilter',
  templateUrl: './eventfilter.component.html',
  styleUrls: ['./eventfilter.component.css']
})
export class EventfilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyUpMtd($event) {
    if ($event.keyCode === 13) {console.log('ENTER KEY is pressed'); }
  }

  onKeyEnter() {
    console.log('ENTER KEY is pressed ....,');
  }

  onKeySpace() {
    console.log('SPACE KEY is pressed ....,');
  }
}
