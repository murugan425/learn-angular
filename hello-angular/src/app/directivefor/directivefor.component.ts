import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivefor',
  templateUrl: './directivefor.component.html',
  styleUrls: ['./directivefor.component.css']
})
export class DirectiveforComponent implements OnInit {
  courses = [
    { id: 1, name: 'ANGUALR'},
    { id: 2, name: 'JAVA'},
    { id: 3, name: 'SPRING'},
    { id: 4, name: 'PYTHON'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.courses.push({ id: 5, name: '.NET'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onRefresh() {
    this.courses = [
      { id: 1, name: 'ANGUALR'},
      { id: 2, name: 'JAVA'},
      { id: 3, name: 'SPRING'},
      { id: 4, name: 'PYTHON'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
