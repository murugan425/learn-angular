import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-outputbinding',
  templateUrl: './outputbinding.component.html',
  styleUrls: ['./outputbinding.component.scss']
})
export class OutputbindingComponent implements OnInit {

  userName: string;
  userAge: string;
  userEmail: string;

  @Output() addNewUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.addNewUser.emit(
      new User(this.userName, this.userAge, this.userEmail)
    );
  }

  resetForm() {
    this.userEmail = '';
    this.userName = '';
    this.userAge = '';
  }
}
