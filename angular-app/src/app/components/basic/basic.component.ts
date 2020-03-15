import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  /*
  template: `
    <input type='text' [(ngModel)]="name">
    <span> Type Something: {{name}}</span>
    `,
  */
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
