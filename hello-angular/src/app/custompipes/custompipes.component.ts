import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {

  user = {
    name: ' Murugan Nagarajan',
    age: 20,
    salary: 14890,
    dob: new Date(1988, 8, 1),
    taxrate: 138.986,
    profiledesc: 'Lorem ipsum dolor sit amet, eros melius qui eu, platonem instructior vim ex, ' +
    ' ea vel ullum philosophia. Mel ne nominavi expetenda, ius omnis adversarium ex. Duo assum ' +
    ' erant ei, ius at verterem persecuti. Cu qui legere intellegebat, at pro iisque vulputate ' +
    ' voluptatum, no ullum virtute euismod nec. Usu quaeque dolores reprimique id. ' +
    ' Modus eirmod delenit pri ad, zril iisque antiopam id vim. Has dignissim gloriatur ' +
    ' ad, eos id populo officiis signiferumque, usu ad nulla facete. Sit facete corpora platonem ei. ' +
    ' Suas inimicus ea mei, per ea fastidii detraxit similique.'
  };

  constructor() { }

  ngOnInit() {
  }

}
