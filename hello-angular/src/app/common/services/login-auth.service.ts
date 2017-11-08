import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthService {

  constructor(private http: Http, private jwtHelper: JwtHelper, private router: Router) { }

  login(userCredentials) {
    return this.http.post('/login/authenticate', JSON.stringify(userCredentials))
      .map(response => {
        console.log(response);
        // Map the credentials based on server response in the header
        const authResp = response.json();
        if (authResp && authResp.token) {
          localStorage.setItem('auth-token', authResp.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    console.log('User Logged Out ' + this.currentUser);
    localStorage.removeItem('auth-token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return false;
    }
    const tokenExpiryDate = this.jwtHelper.getTokenExpirationDate(token);
    const tokenExpired = this.jwtHelper.isTokenExpired(token);
    console.log('Token Expiry Details ' + tokenExpiryDate + ' ::: ' + tokenExpired);
    return !tokenExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('auth-token');
    if (!token) { return null; }
    return this.jwtHelper.decodeToken(token);
  }

  gotoLoginPage() {
    this.router.navigate(['/login']);
  }

  viewUserInfo() {
    this.router.navigate(['/userdetails']);
  }
}
