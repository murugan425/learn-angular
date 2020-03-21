import { Component, OnInit, /*OnChanges, SimpleChanges, DoCheck,*/ AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})

export class LifecycleComponent implements OnInit, /*OnChanges, DoCheck,*/ AfterContentInit,
          AfterContentChecked, AfterViewChecked, AfterViewInit {

  constructor() { 
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('INITIALIZE');
  }

  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log('ONCHANGES: ' + changes);
  }

  ngDoCheck() {
    console.log('NG DO CHECK');
  }
  */

  ngAfterContentInit() {
    console.log('NG AFTER CONTENT');
  }

  ngAfterContentChecked() {
    console.log('NG AFTER CONTENT CHECKED');
  }

  ngAfterViewInit() {
    console.log('NG AFTER VIEW INIT');
  }

  ngAfterViewChecked() {
    console.log('NG AFTER VIEW CHECKED');
  }
}
