import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckFormString]'
})
export class CheckFormStringDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void }) => {
      event.which
    }
  }

  @HostListener('click') onclick() {
    this._element.nativeElement.style.backgroundColor = 'red';

  }

  @HostListener('keypress', ['$event'])
  handleKeyPress(event : KeyboardEvent)
  {
  }



}
