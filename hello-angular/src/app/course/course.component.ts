import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  template: `
  <h2>{{ TITLE }}</h2>
  <ul>
      <li *ngFor='let course of courses'>
          <h3>{{course}}</h3>
      </li>
  </ul>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'List of Courses';
  courses;

  getTitle() {
      return this.title;
  }

  get TITLE() {
      return this.title;
  }

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
