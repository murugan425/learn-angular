import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBgblue]'
})
export class BgblueDirective implements OnInit {

  @HostBinding('style.background') bgColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.appendChild(this.elRef.nativeElement, this.renderer.createComment('Comment Rendered'));
  }

  @HostListener('mouseenter') mousehover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', '#cae9f9');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#012bc7');
    this.bgColor = '#cae9f9';
    this.color = '#012bc7';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#333');
    this.bgColor = 'transparent';
    this.color = '#333';
  }
}
