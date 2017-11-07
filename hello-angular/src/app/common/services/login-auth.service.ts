import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthService {

  constructor(private http: Http) { }

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
    localStorage.removeItem('auth-token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return false;
    }
    const tokenExpiryDate = jwtHelper.getTokenExpirationDate(token);
    const tokenExpired = jwtHelper.isTokenExpired(token);
    console.log('Token Expiry Details' + tokenExpiryDate + ' ::: ' + tokenExpired);
    return !tokenExpired;
  }
}
