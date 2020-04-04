import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('mouseenter')
  @HostListener('mouseleave')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
