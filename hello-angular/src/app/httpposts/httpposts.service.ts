import { BadRequestError } from './../common/errors/bad-request-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
    return this.http.post(this.apiURL + '/countries', JSON.stringify(country))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadRequestError(error));
        } else {
          return Observable.throw(new AppError(error));
        }
      });
  }
  updateCountry(country) {
    return this.http.put('api/countries' + '/' + 4567, JSON.stringify(country))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadRequestError(error));
        } else if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        } else {
          return Observable.throw(new AppError(error));
        }
      });
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
