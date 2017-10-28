import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formarrays',
  templateUrl: './formarrays.component.html',
  styleUrls: ['./formarrays.component.css']
})
export class FormarraysComponent implements OnInit {

  newCourseForm = new FormGroup ({
    courseSections: new FormArray([]) // Check the input param of FormArray, we are having empty controls here
  });

  // Normal way to create a form without using formbuilder
  courseDetailFormGroup = new FormGroup ({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      mobile: new FormControl()
    }),
    courseSections: new FormArray([])
  });

  // Another way to build a form using formbuilder
  constructor(courseDetailFormBuilder: FormBuilder) {
    courseDetailFormBuilder.group({
      name: ['', Validators.required],
      contact: courseDetailFormBuilder.group({
        email: [],
        mobile: []
      }),
      courseSections: courseDetailFormBuilder.array([])
    });
  }

  ngOnInit() {
  }

  get coursesArray() {
    return this.newCourseForm.get('courseSections') as FormArray;
  }

  addNewCourses(course: HTMLInputElement) {
    this.coursesArray.push(new FormControl(course.value));
    course.value = '';
    console.log(course);
  }

  removeCourse(course: FormControl) {
      this.coursesArray.removeAt(this.coursesArray.controls.indexOf(course));
  }

  log(x) {
    console.log(x);
  }
}
