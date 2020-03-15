import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.scss']
})
export class PropbindingComponent implements OnInit {

  enableSubmit = false;

  constructor() {
    setTimeout(() => {
      this.enableSubmit = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

}
