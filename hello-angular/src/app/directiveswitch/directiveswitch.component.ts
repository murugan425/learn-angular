import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveswitch',
  templateUrl: './directiveswitch.component.html',
  styleUrls: ['./directiveswitch.component.css']
})
export class DirectiveswitchComponent implements OnInit {
  viewMode = 'map';

  constructor() { }

  ngOnInit() {
  }

}
