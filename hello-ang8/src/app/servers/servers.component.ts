import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template: '<p>servers duplicated!</p> 1.<app-server></app-server><br/>2.<app-server></app-server>',
  // styleUrls: ['./servers.component.css']
  styles: [' app-server  {color: green;}']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
