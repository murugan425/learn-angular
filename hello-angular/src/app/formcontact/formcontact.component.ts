import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.css']
})
export class FormcontactComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Mobile'}
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
