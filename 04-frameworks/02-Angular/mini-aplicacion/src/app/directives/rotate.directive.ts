import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRotate]',
  standalone: true
})
export class RotateDirective implements OnChanges {
  @Input() appRotate: number = 0;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRotate']) {
      this.applyRotation();
    }
  }

  private applyRotation(): void {
    this.el.nativeElement.style.transform = `rotate(${this.appRotate}deg)`;
    this.el.nativeElement.style.transition = 'transform 0.3s ease';
  }
}
