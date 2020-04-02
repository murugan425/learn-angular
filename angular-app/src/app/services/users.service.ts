import { Injectable } from '@angular/core';
import { User } from '../common/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userlist: Array<User> = [];

  constructor() {
    this.userlist.push(
      new User('Murugan', '32', 'murugan@abc.com', '1987'),
      new User('Mani', '28', 'mani@xyc.com'),
      new User('Alpha', '28', 'alpha@xyc.com'),
      new User('Beta', '32', 'beta@abc.com', '1976')
    );
  }

  activateUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  deactivateUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  getUserByName(name: string) {
    return this.userlist.find(user => user.name.toLowerCase() === name.toLowerCase());
  }

  editUser(updatedUser: User) {
    const userIndex = this.userlist.findIndex(user => user.name.toLowerCase() === updatedUser.name.toLowerCase());
    if (userIndex) { this.userlist[userIndex] = updatedUser; }
  }
}
