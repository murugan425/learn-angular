import { Component, OnInit } from '@angular/core';
import { HttppostsService } from '../httpposts/httpposts.service';

@Component({
  selector: 'app-formcheckbox',
  templateUrl: './formcheckbox.component.html',
  styleUrls: ['./formcheckbox.component.css']
})
export class FormcheckboxComponent implements OnInit {
  allCountries: any[];
  // Use this new list if in case of any requirement, but try to avoid multiple lists
  selectedCountries: Array<any> = [];

  constructor(private service: HttppostsService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.service.getAll()
      .subscribe(
        countriesResp => {
          console.log(countriesResp);
          this.allCountries = countriesResp;
          console.log(this.allCountries.length);
        },
        error => {
          throw error;
        },
        () => {
          // tslint:disable-next-line:prefer-const
          for (let country of this.allCountries) {
            country.selected = false;
          }
        });
  }

  toggleSelectedCountries(country) {
    country.selected = !country.selected;
    if (country.selected === true) {
      this.selectedCountries.push(country);
    }
    // tslint:disable-next-line:one-line
    else {
      this.selectedCountries.splice(country, 1);
    }
  }
}
