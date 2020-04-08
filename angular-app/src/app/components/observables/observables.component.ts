import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  @Input() intervalCounter: number;

  @Input() customCouter: any;

  private intervalSubscription: Subscription;

  private customSubscription: Subscription;

  private customObservables: Observable<number>;

  private customObservableOperator: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe(
      count => {
        // console.log('INTERVAL: ' + count);
        this.intervalCounter = count;
      }
    );

    this.customObservables = new Observable(subscriber => {
      let customcount = 0;
      setInterval(() => {
        subscriber.next(customcount);
        customcount = customcount + 1;
        console.log('OBSERVABLE: ' + 'CUSTOM COUNTER: ' + customcount);
        if ( customcount > 90) {
          subscriber.error(new Error('Custom observable is destroyed after 10 secs'));
          console.log('OBSERVABLE: ' + 'CUSTOM COUNTER ERROR ' + customcount);
        }
        if ( customcount > 100) {
          subscriber.complete();
          console.log('OBSERVABLE: ' + 'CUSTOM COUNTER COMPLETED ' + customcount);
        }
      }, 500);

      /*
      setInterval(() => {
        console.log('ERROR IN CUSTOM COUNTER : ' + customcount);
        subscriber.error(new Error('Custom observable is destroyed after 10 secs'));
      }, 5000);

      setInterval(() => {
        console.log('COMPLETE CUSTOM COUNTER : ' + customcount);
        subscriber.complete();
      }, 10000);
      */
    });

    // .create is depreciated
    /*
    this.customObservables = Observable.create((observer) => {
      let count = 10;
      setInterval(() => {
        observer.next(count);
        count = count + 10;
      }, 1000);
    });
    */

    this.customObservableOperator = this.customObservables.pipe(filter(data =>(data % 3 === 0)), map((data: number) => {
      return ' DATACOUNT: ' + data;
    }));

    this.customSubscription = this.customObservableOperator.subscribe(count => {
      this.customCouter = count;
      console.log('OBSERVER: ' + 'CUSTOM COUNTER: ' + count);
    }, error => {
      console.log(error.message + ' occurred. So the observer is unscubscribed');
      // this.customSubscription.unsubscribe();
    }, () => {
        console.log('OBSERVER: ' + 'CUSTOM COUNTER COMPLETED');
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
