import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgblue]'
})
export class BgblueDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', '#cae9f9');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#012bc7');
    this.renderer.appendChild(this.elRef.nativeElement, this.renderer.createComment('Comment Rendered'));
  }
}
