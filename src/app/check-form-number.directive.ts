import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appCheckFormNumber]'
})
export class CheckFormNumberDirective {

  constructor(private _element: ElementRef) {}
  @HostListener('click') onclick() {
    this._element.nativeElement.style.backgroundColor = 'red';
  }

}
