import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FOUNDATION_CONTACT, NAV_ITEMS } from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <div class="max-w-7xl mx-auto">
        <div
          appSpecularTrack
          class="glass-floating pointer-events-auto rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-4"
        >
          <a
            href="#inicio"
            class="flex items-center gap-3 rounded-xl p-1"
          >
            <span
              class="w-10 h-10 rounded-xl bg-ink-950 text-moss-100 flex items-center justify-center shadow-inner shrink-0"
              aria-hidden="true"
            >
              <span class="font-display font-extrabold text-sm tracking-tight"
                >CO<sub class="text-xs text-moss-300">2</sub></span
              >
            </span>
            <span class="leading-tight">
              <span class="block font-display font-bold text-base sm:text-lg tracking-tight text-ink-950">
                Fundación CO2
              </span>
              <span class="block text-xs text-ink-700 font-medium">Bolivia</span>
            </span>
          </a>

          <nav class="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            @for (item of navItems; track item.href) {
              <a
                [href]="item.href"
                class="px-3.5 py-2 rounded-xl text-sm font-medium text-ink-800 hover:bg-white/75 hover:text-ink-950 transition-colors"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          <div class="flex items-center gap-2.5">
            <a
              [href]="whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
              class="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-xs text-ink-800 hover:bg-white/65 transition-colors tabular-figures"
            >
              <svg
                class="w-3.5 h-3.5 text-moss-600 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span>{{ contact.whatsappDisplay }}</span>
            </a>

            <a
              href="#donaciones"
              class="tactile-btn hidden sm:inline-flex items-center gap-2 bg-ink-950 hover:bg-moss-700 text-moss-50 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-xl shadow-md"
            >
              <span>Donar con QR</span>
              <svg
                class="w-3.5 h-3.5 text-moss-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>

            <button
              type="button"
              (click)="toggleMobileMenu()"
              [attr.aria-label]="mobileMenuOpen() ? 'Cerrar menú' : 'Abrir menú'"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-controls="mobile-navigation"
              class="lg:hidden p-2.5 rounded-xl bg-white/70 text-ink-950 hover:bg-white transition-colors"
            >
              @if (mobileMenuOpen()) {
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              } @else {
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 7h16M4 12h16M4 17h11"
                  />
                </svg>
              }
            </button>
          </div>
        </div>

        @if (mobileMenuOpen()) {
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            class="lg:hidden mt-2.5 glass-floating pointer-events-auto rounded-2xl p-3 space-y-1"
          >
            @for (item of navItems; track item.href) {
              <a
                [href]="item.href"
                (click)="closeMobileMenu()"
                class="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-ink-900 hover:bg-white/75 transition-colors"
              >
                <span>{{ item.label }}</span>
                <svg
                  class="w-4 h-4 text-ink-700"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </a>
            }
            <div class="pt-2">
              <a
                href="#donaciones"
                (click)="closeMobileMenu()"
                class="flex items-center justify-center gap-2 w-full bg-ink-950 text-white text-xs uppercase tracking-wider font-semibold px-4 py-3.5 rounded-xl"
              >
                <span>Donar por QR Simple</span>
              </a>
            </div>
          </nav>
        }
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {
  readonly contact = FOUNDATION_CONTACT;
  readonly navItems = NAV_ITEMS;
  readonly whatsappHref = `https://wa.me/${FOUNDATION_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hola Fundación CO2, deseo información.'
  )}`;

  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
