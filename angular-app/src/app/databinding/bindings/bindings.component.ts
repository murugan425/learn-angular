import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {

  userName: string;
  enableReset = false;

  constructor() { }

  ngOnInit(): void {
  }

  enableResetBtn() {
    this.enableReset = this.userName === '' ? false : true;
  }

  resetUsername() {
    this.userName = '';
  }
}
