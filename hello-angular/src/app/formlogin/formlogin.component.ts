import { Router, ActivatedRoute } from '@angular/router';
import { LoginAuthService } from './../common/services/login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(private router: Router, private authService: LoginAuthService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/userlanding']);
    }
  }

  signIn(userCredentials) {
    this.authService.login(userCredentials)
      .subscribe(validUserResp => {
        if (validUserResp) {
          const returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/userlanding']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}
