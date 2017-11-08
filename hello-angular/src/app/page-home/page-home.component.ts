import { LoginAuthService } from './../common/services/login-auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  authService: LoginAuthService;

  constructor(authService: LoginAuthService ) {
    this.authService = authService;
   }

  ngOnInit() {
  }

}
