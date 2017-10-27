import { UserNameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-formsignup',
  templateUrl: './formsignup.component.html',
  styleUrls: ['./formsignup.component.css']
})
export class FormsignupComponent implements OnInit {
  signupform = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        UserNameValidators.noBlankSpace] // ,
        // TODO: Try to fix the Async validators overriding the normal validation errors.
        // UserNameValidators.uniqueUserName
      ),
      password: new FormControl('', Validators.required)
    })
  });
  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.signupform.get('account.username');
  }

  get password() {
    return this.signupform.get('account.password');
  }

  log(x) {
    console.log(x);
  }

  signup() {
    // let signupSuccess = signupService.signup(this.signupform.value);
    const signupSuccess = false;
    if (!signupSuccess) {
      // Adding error at each control level on form submit
      this.username.setErrors({invalidUserName: 'Username is invalid'});
      // Adding error at each form level on form submit
      this.signupform.setErrors({
        invalidSignUp: true,
        invalidSignUpMsg: 'SignUp Service is not available'});
    }
    this.log(this.signupform);
  }
}
