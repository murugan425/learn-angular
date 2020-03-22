import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBggreen]'
})
export class BggreenDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#c8ecc8';
    this.elementRef.nativeElement.style.color = '#005000';
  }
}
