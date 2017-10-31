/*
 * @Author: @murugan425
 * @Date: 2017-10-31 01:55:02
 * @Last Modified by: @murugan425
 * @Last Modified time: 2017-10-31 19:02:00
 */
import { DataService } from './../common/services/data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpgitpostsService extends DataService {
  private static moshGitFollowers = 'https://api.github.com/users/mosh-hamedani/followers';
  private static muruganGitFollowers = 'https://api.github.com/users/murugan425/followers';

  constructor(http: Http) {
    super(HttpgitpostsService.muruganGitFollowers , http);
  }
}
