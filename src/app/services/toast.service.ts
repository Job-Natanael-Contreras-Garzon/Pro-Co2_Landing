import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private timerId: ReturnType<typeof setTimeout> | null = null;

  readonly message = signal<string>('');
  readonly visible = signal<boolean>(false);

  show(text: string): void {
    this.message.set(text);
    this.visible.set(true);

    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }

    this.timerId = setTimeout(() => {
      this.visible.set(false);
    }, 3400);
  }
}
