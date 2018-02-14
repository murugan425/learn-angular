import { Component, OnInit,  Input, Output } from '@angular/core';
import { zippyExpCollapse } from '../animations';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    zippyExpCollapse
  ]
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
