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

    http.get('/api/countries')
    .subscribe(response => {
          console.log(response.json());
          this.countries = response.json();
    });
  }

  ngOnInit() {
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
}
