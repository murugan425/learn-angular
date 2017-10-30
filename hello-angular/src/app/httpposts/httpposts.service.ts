import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttppostsService {
  private typicodeURL = 'http://jsonplaceholder.typicode.com/posts';
  private apiURL = '/api';
  constructor(private http: Http) { }

  getTypicodePosts() {
    return this.http.get(this.typicodeURL);
  }
  getCourses() {
    return this.http.get(this.apiURL + '/courses');
  }
  getCountries() {
    return this.http.get(this.apiURL + '/countries');
  }
  addCountry(country) {
    return this.http.post(this.apiURL + '/countries', JSON.stringify(country));
  }
  updateCountry(country) {
    return this.http.put('api/countries' + '/' + country.id, JSON.stringify(country));
  }
  deleteCountry(countryId) {
    return this.http.delete(this.apiURL + '/countries' + '/' + countryId)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        } else {
          return Observable.throw(new AppError(error));
        }
      });
  }
}
