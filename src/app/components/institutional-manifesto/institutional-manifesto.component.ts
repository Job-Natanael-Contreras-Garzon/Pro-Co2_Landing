import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PILLARS } from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';

@Component({
  selector: 'app-institutional-manifesto',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="institucional" class="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div class="lg:col-span-7">
            <h2
              class="display-title text-3xl sm:text-5xl font-extrabold text-ink-950 leading-[1.02]"
            >
              Restauramos el equilibrio entre ciudad, comunidad y ecosistema.
            </h2>
          </div>
          <div class="lg:col-span-5 lg:pb-1">
            <p class="text-base text-ink-800 leading-relaxed max-w-[52ch]">
              Fundación CO2 nace como una respuesta técnica y ciudadana frente a la deforestación en
              Bolivia, uniendo acción territorial con transparencia verificable en cada jornada.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div
            appSpecularTrack
            class="lg:col-span-6 glass-sheet rounded-[1.75rem] p-7 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div
                class="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-700 pb-4 border-b border-ink-950/10"
              >
                <span>Origen y propósito</span>
                <span>Organización sin fines de lucro · Bolivia</span>
              </div>

              <h3
                class="display-title text-2xl sm:text-3xl font-bold text-ink-950 mt-6 leading-tight"
              >
                De la conciencia ambiental a la intervención medible en territorio
              </h3>

              <p class="mt-4 text-ink-800 leading-relaxed text-base max-w-[58ch]">
                Desde nuestros inicios hemos sumado a voluntarios, familias, unidades educativas y
                aliados locales para producir plantines nativos en vivero, recuperar corredores
                verdes urbanos y formar brigadas escolares en gestión de residuos y cultura
                climática.
              </p>

              <p class="mt-3.5 text-ink-800 leading-relaxed text-base max-w-[58ch]">
                Buscamos que cualquier persona o empresa pueda convertir su preocupación por el
                clima en árboles vivos, suelo fértil y aire limpio, con trazabilidad clara de cada
                aporte.
              </p>
            </div>

            <blockquote class="mt-8 pt-6 border-t border-ink-950/12">
              <p class="font-display font-semibold text-ink-950 text-lg leading-snug">
                “No heredamos la tierra de nuestros padres; la custodiamos para quienes respirarán
                después de nosotros.”
              </p>
              <footer class="text-xs font-semibold text-moss-700 mt-2.5">
                Carta fundacional · Fundación CO2
              </footer>
            </blockquote>
          </div>

          <div class="lg:col-span-6 flex flex-col gap-6">
            <div
              class="relative rounded-[1.75rem] overflow-hidden h-64 sm:h-72 border border-white/70 shadow-xl"
            >
              <img
                src="images/siembra-voluntarios.jpg"
                alt="Voluntarios de Fundación CO2 preparando el sustrato y sembrando un árbol nativo"
                width="1100"
                height="630"
                decoding="sync"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-tr from-ink-950/45 via-transparent to-transparent"
              ></div>
              <span
                class="absolute top-4 left-5 text-xs font-medium text-white bg-ink-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20"
              >
                Trabajo de campo y monitoreo trimestral
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-12 gap-5 lg:-mt-12 relative z-10 sm:px-3">
              <div
                appSpecularTrack
                class="sm:col-span-7 glass-smoked glass-hover rounded-2xl p-6 sm:p-7"
              >
                <h3 class="display-title text-xl sm:text-2xl font-bold text-white leading-snug">
                  Misión: acción climática participativa
                </h3>
                <p class="mt-3 text-sm text-moss-100 leading-relaxed">
                  Promover la conservación ambiental, la reforestación con especies nativas y la
                  educación climática mediante programas medibles que reduzcan la huella de carbono.
                </p>
              </div>

              <div
                appSpecularTrack
                class="sm:col-span-5 glass-floating glass-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 class="display-title text-xl font-bold text-ink-950 leading-snug">
                    Visión: referente ambiental en Bolivia
                  </h3>
                  <p class="mt-2.5 text-sm text-ink-800 leading-relaxed">
                    Liderar la restauración de bosques y la construcción de comunidades resilientes
                    con transparencia ejemplar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5">
          @for (pillar of pillars; track pillar.title; let idx = $index) {
            <article
              appSpecularTrack
              [class]="
                idx === 1 || idx === 2
                  ? 'md:col-span-7 glass-sheet glass-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between'
                  : 'md:col-span-5 glass-sheet glass-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between'
              "
            >
              <div>
                <h3 class="display-title text-xl sm:text-2xl font-bold text-ink-950">
                  {{ pillar.title }}
                </h3>
                <p class="text-base text-ink-800 mt-2.5 leading-relaxed max-w-[54ch]">
                  {{ pillar.summary }}
                </p>
              </div>

              @if (pillar.highlight) {
                <p class="mt-5 pt-4 border-t border-ink-950/10 text-xs font-semibold text-moss-700">
                  {{ pillar.highlight }}
                </p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class InstitutionalManifestoComponent {
  readonly pillars = PILLARS;
}
