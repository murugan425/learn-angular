import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input ('title') title: string;
  isExpanded;

  constructor() { }

  ngOnInit() {
  }

  toggleZippedBody() {
    this.isExpanded = !this.isExpanded;
  }

}
