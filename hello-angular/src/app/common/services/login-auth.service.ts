import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthService {

  constructor(private http: Http) { }

  login(userCredentials) {
    return this.http.post('/login/authenticate', JSON.stringify(userCredentials))
      .map(response => {
        // Map the credentials based on server response in the header
        console.log(response);
      });
  }

  logout() {}

  isLoggedIn() {
    return false;
  }
}
