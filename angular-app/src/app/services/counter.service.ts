import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activateCount: any;
  deactivateCount: any;
  counts = {active: 0, inactive: 0};

  constructor() {
    this.activateCount = 0;
    this.deactivateCount = 0;
    this.counts.active = 0;
    this.counts.inactive = 0;
  }

  userActivated() {
    this.counts.active++;
    this.activateCount = this.activateCount + 1;
    console.log(' ACTIVE : ' + this.activateCount);
  }

  userDeactivated() {
    this.counts.inactive++;
    this.deactivateCount++;
    console.log(' DEACTIVE : ' + this.deactivateCount);
  }
}
