// Move the complete the userprofile class to a separate file
// by adding a export command in front of it and import the same in this file.
import { UserDetail } from './userdetail'

let myUserProfile = new UserDetail('Murugan');
myUserProfile.printUserName(); 
myUserProfile.setName('Murugan Nagarajan');
console.log(myUserProfile.AGE);
myUserProfile.AGE = 24;
myUserProfile.printUserAge();
myUserProfile.printUserName(); 