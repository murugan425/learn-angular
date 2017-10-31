/*
 * @Author: @murugan425
 * @Date: 2017-10-31 01:55:02
 * @Last Modified by: @murugan425
 * @Last Modified time: 2017-10-31 18:17:06
 */
import { DataService } from './../common/services/data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpgitpostsService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/murugan425/followers', http);
  }
}
