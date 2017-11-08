import { LoginAuthService } from './../common/services/login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {
  authService: LoginAuthService;

  constructor(authService: LoginAuthService) {
    this.authService = authService;
  }

  ngOnInit() {
  }

}
