import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activateCount = 0;
  deactivateCount = 0;

  constructor() { }

  userActivated() {
    this.activateCount = this.activateCount + 1;
    console.log(' ACTIVE : ' + this.activateCount);
  }

  userDeactivated() {
    this.deactivateCount++;
    console.log(' DEACTIVE : ' + this.deactivateCount);
  }
}
