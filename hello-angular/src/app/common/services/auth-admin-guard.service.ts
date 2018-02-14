import { LoginAuthService } from './login-auth.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAdminGuardService implements CanActivate {

  constructor(private router: Router, private authService: LoginAuthService) { }

  /* This AuthGuard will be useful to prevent the user
  from accessing the routes/api directly based on their user access */

  /* In this case we check whether the user is a admin,
  before allowing him to access the User Finance details */

  canActivate() {
    if (this.authService.currentUser.admin) { return true; }
    this.router.navigate(['/noaccess']); return false;
  }
}
