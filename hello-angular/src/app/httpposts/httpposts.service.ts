import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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
    return this.http.delete(this.apiURL + '/countries' + '/' + countryId);
  }
}
