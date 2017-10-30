import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-httpposts',
  templateUrl: './httpposts.component.html',
  styleUrls: ['./httpposts.component.css']
})
export class HttppostsComponent implements OnInit {
  typiCodePostResponse: any[];
  courses: any[];
  countries: any[];

  constructor(private http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
          console.log(response.json());
          this.typiCodePostResponse = response.json();
    });

    http.get('/api/courses')
    .subscribe(response => {
          console.log(response.json());
          this.courses = response.json();
    });

    this.getCountries();
  }

  ngOnInit() {
  }

  getCountries() {
    this.http.get('/api/countries')
    .subscribe(response => {
          console.log(response.json());
          this.countries = response.json();
    });
  }

  addCountry(input: HTMLInputElement) {
    const newCountry: any = {name: input.value};
    this.http.post('api/countries', JSON.stringify(newCountry))
      .subscribe(response => {
          this.countries.push(newCountry);
          console.log(response.json());
      }
    );
    input.value = '';
  }

  updateCountry(country) {
    const countryName: string = country.name + ' Updated';
    this.http.put('api/countries' + '/' + country.id, JSON.stringify({id: country.id, name: countryName}))
      .subscribe(response => {
        console.log(response.json());
      }
    );
  }

  deleteCountry(country) {
    this.http.delete('api/countries' + '/' + country.id)
      .subscribe(response => {
        console.log('Delete' + country);
        this.countries.splice(this.countries.indexOf(country));
      });
      this.getCountries();
  }
}
