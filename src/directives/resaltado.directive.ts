import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  constructor(private elment: ElementRef) {
    console.log('Directiva llamada!');
    /* elment.nativeElement.style.backgroundColor = 'yellow'; */
  }

  @Input('appResaltado') newColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.resaltar(this.newColor || 'blue');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
  }

  /**
   * Change element's color
   * @param color Name of the color sended by the listener
   */
  private resaltar(color: string): void {
    this.elment.nativeElement.style.backgroundColor = color;
  }
}
