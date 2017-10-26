import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcourse',
  templateUrl: './formcourse.component.html',
  styleUrls: ['./formcourse.component.css']
})
export class FormcourseComponent implements OnInit {
  courseCategorys = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submitForm(f) {
    console.log(f);
  }
}
