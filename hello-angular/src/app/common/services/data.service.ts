/*
 * @Author: @murugan425
 * @Date: 2017-10-31 01:55:39
 * @Last Modified by: @murugan425
 * @Last Modified time: 2017-10-31 14:18:04
 */
import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-found-error';
import { BadRequestError } from './../errors/bad-request-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private apiUrl: string, private http: Http) { }

  getAll() {
    return this.http.get(this.apiUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }
  add(resource) {
    return this.http.post(this.apiUrl, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }
  update(resource) {
    return this.http.patch(this.apiUrl + '/' + resource.id, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }
  delete(id) {
    return this.http.delete(this.apiUrl + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadRequestError(error));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
}

