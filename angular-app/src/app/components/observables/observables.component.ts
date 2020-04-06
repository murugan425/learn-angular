import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  @Input() counter: number;

  constructor() { }

  ngOnInit(): void {
    interval(1000).subscribe(
      count => {
        console.log(count);
        this.counter = count;
      }
    );
  }

}
