/*
 * @Author: @murugan425
 * @Date: 2017-10-31 01:58:04
 * @Last Modified by: @murugan425
 * @Last Modified time: 2017-10-31 14:30:18
 */
import { BadRequestError } from './../common/errors/bad-request-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
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
    // Commenting out below as this service class is used only for one Domain object.
    // <Country>
    // this.service.getTypicodePosts()
    // .subscribe(response => {
    //       console.log(response.json());
    //       this.typiCodePostResponse = response.json();
    // });

    // this.service.getCourses()
    // .subscribe(response => {
    //       console.log(response.json());
    //       this.courses = response.json();
    // });

    this.getCountries();
  }

  getCountries() {
    this.service.getAll()
      .subscribe(
        countriesResp => {
          console.log(countriesResp);
          this.countries = countriesResp;
        },
        error => {
          throw error; // Will be handled by the Global AppErrorHandler class
        });
  }

  addCountry(input: HTMLInputElement) {
    const newCountryReq: any = {name: input.value};
    input.value = '';
    this.service.add(newCountryReq)
      .subscribe(
        newCountryResp => {
          newCountryReq.id = newCountryResp.id;
          this.countries.splice(0, 0, newCountryReq);
          console.log(newCountryResp);
        },
        (error: Response) => {
          if (error instanceof BadRequestError) {
            // this.form.setError(error.);
          } else {
            throw error;
          }
        });
  }

  updateCountry(country) {
    const countryName: string = country.name + ' Updated';
    this.service.update({id: country.id, name: countryName})
      .subscribe(
        countryUpdResp => {
          console.log(countryUpdResp);
        },
        error => {
          if (error instanceof NotFoundError) {
            alert('This country doesn\'t exists in the system.');
            console.log(error);
          } else if (error instanceof BadRequestError) {
            alert('The Input data is invalid');
            console.log(error);
          } else {
            throw error;
          }
        });
  }

  deleteCountry(country) {
    // Optimistic approach so that the change reflects quickly in UI without waiting for the server response.
    this.countries.splice(this.countries.indexOf(country));

    this.service.delete(country.id)
      .subscribe(
        () => { // In case of delete there is no response object.
          console.log('Delete' + country.id);
        },
        (error: AppError) => {
          this.countries.splice(this.countries.indexOf(country), 0, country);

          if (error instanceof NotFoundError) {
            alert('This country doesn\'t exists in the system.');
            console.log(error);
          } else {
            throw error;
          }
        });
    this.getCountries();
  }
}
