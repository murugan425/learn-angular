import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {

  userName: string;
  enableReset = false;

  userlist: Array<User> = [];

  constructor() {
    this.userlist.push(
      new User('Murugan', '32', 'murugan@abc.com', '1987'),
      new User('Mani', '28', 'mani@xyc.com'),
      new User('Alpha', '28', 'alpha@xyc.com'),
      new User('Beta', '32', 'beta@abc.com', '1976')
    );
  }

  ngOnInit(): void {
  }

  enableResetBtn() {
    this.enableReset = this.userName === '' ? false : true;
  }

  resetUsername() {
    this.userName = '';
  }
}
