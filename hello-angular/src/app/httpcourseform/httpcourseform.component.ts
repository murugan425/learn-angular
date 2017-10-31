import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpcourseform',
  templateUrl: './httpcourseform.component.html',
  styleUrls: ['./httpcourseform.component.css']
})
export class HttpcourseformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  addCourse(input: HTMLInputElement) {
    console.log(input);
  }
}
