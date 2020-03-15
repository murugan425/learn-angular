import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strinterpolation',
  templateUrl: './strinterpolation.component.html',
  styleUrls: ['./strinterpolation.component.scss']
})
export class StrinterpolationComponent implements OnInit {

  birthYear = 20;

  userName = 'NA';

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
