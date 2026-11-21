import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Tracks desktop pointer movement inside a glass surface to update the
 * `--mx` / `--my` CSS custom properties driving the specular sheen.
 */
@Directive({
  selector: '[appSpecularTrack]',
  standalone: true,
  host: {
    class: 'specular-track',
  },
})
export class SpecularTrackDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (event.pointerType === 'touch') return;
    const rect = this.host.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.host.nativeElement.style.setProperty('--mx', `${x}px`);
    this.host.nativeElement.style.setProperty('--my', `${y}px`);
  }
}
