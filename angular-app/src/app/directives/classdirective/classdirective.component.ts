import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classdirective',
  templateUrl: './classdirective.component.html',
  styleUrls: ['./classdirective.component.scss']
})
export class ClassdirectiveComponent implements OnInit {

  badgeStatus: boolean;

  constructor() {
    this.badgeStatus = Math.random() > 0.5 ? true : false;
  }

  ngOnInit(): void {
  }

}
