import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivehidden',
  templateUrl: './directivehidden.component.html',
  styleUrls: ['./directivehidden.component.css']
})
export class DirectivehiddenComponent implements OnInit {
  courses = [];

  constructor() { }

  ngOnInit() {
  }

}
