import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOUNDATION_CONTACT, NAV_ITEMS } from '../../data/foundation.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="px-4 sm:px-6 lg:px-8 pb-10">
      <div class="max-w-7xl mx-auto glass-smoked rounded-[2rem] p-7 sm:p-10">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/15">
          <div class="md:col-span-5">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 rounded-xl bg-moss-500/25 border border-moss-300/35 flex items-center justify-center font-display font-extrabold text-sm text-moss-200"
                aria-hidden="true"
              >
                CO<sub>2</sub>
              </span>
              <span class="display-title text-2xl font-bold text-white">Fundación CO2</span>
            </div>
            <p class="mt-4 text-sm sm:text-base text-moss-100 leading-relaxed max-w-sm">
              Conservación ambiental, reforestación con especies nativas y educación climática
              comunitaria en Bolivia.
            </p>
          </div>

          <div class="md:col-span-3">
            <p class="text-xs font-semibold uppercase tracking-wider text-moss-300 mb-4">
              Secciones
            </p>
            <ul class="space-y-2.5 text-sm text-moss-100">
              @for (item of navItems; track item.href) {
                <li>
                  <a [href]="item.href" class="hover:text-white transition-colors">
                    {{ item.label }}
                  </a>
                </li>
              }
              <li>
                <a href="#donaciones" class="hover:text-white transition-colors">Donaciones</a>
              </li>
            </ul>
          </div>

          <div class="md:col-span-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-moss-300 mb-4">
              Contacto directo
            </p>
            <ul class="space-y-2.5 text-sm text-moss-100 font-mono tabular-figures">
              <li>
                <a
                  [href]="whatsappHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-moss-300 transition-colors"
                >
                  {{ contact.whatsappDisplay }}
                </a>
              </li>
              <li>
                <a
                  [href]="'mailto:' + contact.email"
                  class="hover:text-moss-300 transition-colors break-all font-sans"
                >
                  {{ contact.email }}
                </a>
              </li>
            </ul>
            <p class="mt-4 text-xs text-moss-200">{{ contact.location }}</p>
          </div>
        </div>

        <div
          class="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-moss-200"
        >
          <p>© {{ currentYear }} Fundación CO2 Bolivia.</p>
          <p>Reforestación nativa, educación ambiental y aportes directos sin intermediarios.</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  readonly contact = FOUNDATION_CONTACT;
  readonly navItems = NAV_ITEMS;
  readonly currentYear = new Date().getFullYear();
  readonly whatsappHref = `https://wa.me/${FOUNDATION_CONTACT.whatsappNumber}`;
}
