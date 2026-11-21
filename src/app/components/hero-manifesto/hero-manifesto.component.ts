import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOUNDATION_CONTACT, HERO_METRICS } from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';

@Component({
  selector: 'app-hero-manifesto',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-6 border-b border-ink-950/12 text-xs text-ink-700 font-medium"
        >
          <span>{{ contact.location }}</span>
          <span>Reforestación nativa, educación climática y acción comunitaria</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
          <div class="lg:col-span-7">
            <div appSpecularTrack class="glass-sheet rounded-[1.75rem] p-6 sm:p-9 lg:p-10">
              <h1
                class="display-title text-4xl sm:text-5xl xl:text-[3.65rem] font-extrabold text-ink-950 leading-[0.98]"
              >
                Bosque vivo frente a la huella de <span class="text-moss-600">carbono.</span>
              </h1>

              <p class="mt-4 sm:mt-5 text-base sm:text-lg text-ink-800 leading-relaxed max-w-[56ch]">
                Somos una fundación boliviana dedicada a restaurar áreas degradadas con especies
                nativas, acompañar brigadas escolares y convertir cada aporte ciudadano en árboles con
                seguimiento real.
              </p>

              <div
                class="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-ink-950/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <a
                  id="hero-donate-cta"
                  href="#donaciones"
                  class="tactile-btn inline-flex items-center justify-between sm:justify-center gap-4 bg-ink-950 hover:bg-moss-700 text-white px-6 py-3.5 rounded-2xl shadow-lg group"
                >
                  <span class="font-display font-bold text-base sm:text-lg">
                    Donar por QR Simple
                  </span>
                  <span
                    class="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-moss-500 flex items-center justify-center transition-colors shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 17L17 7M17 7H8M17 7v9"
                      />
                    </svg>
                  </span>
                </a>

                <a
                  href="#programas"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-moss-600 py-2 transition-colors"
                >
                  <span>Conocer programas</span>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              <dl
                class="mt-8 pt-6 border-t border-ink-950/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
              >
                @for (metric of metrics; track metric.value; let first = $first) {
                  <div
                    [class]="
                      first
                        ? 'flex flex-col'
                        : 'flex flex-col sm:border-l sm:border-ink-950/10 sm:pl-5'
                    "
                  >
                    <dd
                      class="display-title font-mono tabular-figures text-2xl sm:text-3xl font-extrabold text-ink-950"
                    >
                      {{ metric.value }}
                    </dd>
                    <dt class="text-xs text-ink-700 leading-snug mt-1">
                      {{ metric.label }}
                    </dt>
                  </div>
                }
              </dl>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div
              class="relative rounded-[1.75rem] overflow-hidden shadow-2xl border border-white/60 aspect-[4/3.6] sm:aspect-[16/10] lg:aspect-[4/3.8]"
            >
              <img
                src="images/hero-bosque.jpg"
                alt="Dosel de bosque nativo protegido mediante las jornadas de reforestación de Fundación CO2"
                width="1400"
                height="788"
                fetchpriority="high"
                decoding="sync"
                class="w-full h-full object-cover object-center"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent"
              ></div>

              <div class="absolute bottom-5 left-5 right-5 lg:bottom-24">
                <p class="display-title text-xl sm:text-2xl font-bold text-white leading-snug">
                  Cada aporte de 50 Bs financia 5 plantines nativos con cuidado en campo.
                </p>
              </div>
            </div>

            <div
              appSpecularTrack
              class="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-10 lg:right-12 z-20 glass-floating glass-hover rounded-2xl p-5"
            >
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="font-display font-bold text-base sm:text-lg text-ink-950">
                    Aporte inmediato con QR Simple
                  </p>
                  <p class="text-xs text-ink-700 mt-1">
                    Interoperable desde cualquier banco en Bolivia, con comprobante directo por
                    WhatsApp.
                  </p>
                </div>
                <a
                  href="#donaciones"
                  aria-label="Ir a donaciones con QR Simple"
                  class="tactile-btn shrink-0 w-12 h-12 rounded-2xl bg-moss-600 hover:bg-ink-950 text-white flex items-center justify-center shadow-md"
                >
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
                      d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h2m4 0h-2m-2-3v6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroManifestoComponent {
  readonly contact = FOUNDATION_CONTACT;
  readonly metrics = HERO_METRICS;
}
