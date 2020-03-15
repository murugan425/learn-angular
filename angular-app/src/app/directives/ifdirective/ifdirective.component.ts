import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.scss']
})
export class IfdirectiveComponent implements OnInit {

  displayMsg1: boolean;
  displayMsg2: boolean;

  constructor() {
    this.displayMsg1 = Math.random() > 0.5 ? true : false;
    this.displayMsg2 = Math.random() > 0.5 ? true : false;
   }

  ngOnInit(): void {
  }

  refreshStatus() {
    this.displayMsg1 = Math.random() > 0.5 ? true : false;
    this.displayMsg2 = Math.random() > 0.5 ? true : false;
  }
}
