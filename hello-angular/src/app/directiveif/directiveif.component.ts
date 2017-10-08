import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-directiveif',
  templateUrl: './directiveif.component.html',
  styleUrls: ['./directiveif.component.css']
})
export class DirectiveifComponent implements OnInit {
  courses = [1];

  constructor() { }

  ngOnInit() {
  }

}
