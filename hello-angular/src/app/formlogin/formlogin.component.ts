import { Router } from '@angular/router';
import { LoginAuthService } from './../common/services/login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(private router: Router, private authService: LoginAuthService) { }

  ngOnInit() {
  }

  signIn(userCredentials) {
    this.authService.login(userCredentials)
      .subscribe(validUserResp => {
        if (validUserResp) {
          this.router.navigate(['/userlanding']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}
