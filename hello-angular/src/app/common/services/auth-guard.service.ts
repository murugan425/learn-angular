import { LoginAuthService } from './login-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: LoginAuthService) { }

  /* This AuthGuard will be useful to prevent the user
  from accessing the routes directly before logging in.
  And redirects them to Login page.., */

  // Here, userLanding Route is not accessible until the user sign in.
  canActivate(router, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) { return true; }

    // this.router.navigate(['/login']); return false;

    // The above line just redirects the user to login page.
    // Let's say in case we need to redirect the user back
    // to the page which he tried to access

    this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}}); return false;
  }
}
