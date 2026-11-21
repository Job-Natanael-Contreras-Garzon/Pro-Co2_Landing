import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-popover',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #toastEl
      popover="manual"
      role="status"
      aria-live="polite"
      class="modern-popover glass-smoked fixed bottom-6 left-1/2 -translate-x-1/2 m-0 px-5 py-3.5 rounded-2xl max-w-[92vw]"
    >
      <div class="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white">
        <svg
          class="w-4 h-4 text-moss-300 shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ toast.message() }}</span>
      </div>
    </div>
  `,
})
export class ToastPopoverComponent {
  readonly toast = inject(ToastService);
  private readonly toastEl = viewChild<ElementRef<HTMLDivElement>>('toastEl');

  constructor() {
    effect(() => {
      const visible = this.toast.visible();
      const el = this.toastEl()?.nativeElement as (HTMLDivElement & {
        showPopover?: () => void;
        hidePopover?: () => void;
      }) | undefined;
      if (!el) return;

      if (visible) {
        if (typeof el.showPopover === 'function') {
          if (el.matches(':popover-open')) el.hidePopover?.();
          el.showPopover();
        } else {
          el.style.display = 'block';
        }
      } else {
        if (typeof el.hidePopover === 'function' && el.matches(':popover-open')) {
          el.hidePopover();
        } else {
          el.style.display = 'none';
        }
      }
    });
  }
}
