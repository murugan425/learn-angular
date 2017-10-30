import { HttppostsService } from './httpposts.service';
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

  constructor(private service: HttppostsService) {  }

  ngOnInit() {
    this.service.getTypicodePosts()
    .subscribe(response => {
          console.log(response.json());
          this.typiCodePostResponse = response.json();
    });

    this.service.getCourses()
    .subscribe(response => {
          console.log(response.json());
          this.courses = response.json();
    });

    this.getCountries();
  }

  getCountries() {
    this.service.getCountries()
    .subscribe(response => {
          console.log(response.json());
          this.countries = response.json();
    });
  }

  addCountry(input: HTMLInputElement) {
    const newCountry: any = {name: input.value};
    this.service.addCountry(newCountry)
      .subscribe(response => {
          this.countries.push(newCountry);
          console.log(response.json());
      }
    );
    input.value = '';
  }

  updateCountry(country) {
    const countryName: string = country.name + ' Updated';
    this.service.updateCountry({id: country.id, name: countryName})
      .subscribe(response => {
        console.log(response.json());
      }
    );
  }

  deleteCountry(country) {
    this.service.deleteCountry(country.id)
      .subscribe(response => {
        console.log('Delete' + country);
        this.countries.splice(this.countries.indexOf(country));
      });
      this.getCountries();
  }
}
