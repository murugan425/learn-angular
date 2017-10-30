/*
 * @Author: @murugan425
 * @Date: 2017-10-31 01:55:02
 * @Last Modified by:   @murugan425
 * @Last Modified time: 2017-10-31 01:55:02
 */
import { DataService } from './../common/services/data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttppostsService extends DataService {
  private typicodeURL = 'http://jsonplaceholder.typicode.com/posts';
  constructor(http: Http) {
    super('/api/countries', http);
  }
}
