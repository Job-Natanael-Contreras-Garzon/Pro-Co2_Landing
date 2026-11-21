import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';

@Component({
  selector: 'app-programs-bento',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="programas" class="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl">
            <h2
              class="display-title text-3xl sm:text-5xl font-extrabold text-ink-950 leading-[1.02]"
            >
              Tres frentes de acción con impacto medible en el territorio.
            </h2>
          </div>
          <p class="text-sm font-medium text-ink-700 lg:text-right max-w-xs">
            Líneas estratégicas activas con monitoreo de supervivencia y participación vecinal.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article
            appSpecularTrack
            class="lg:col-span-8 glass-sheet glass-hover rounded-[1.75rem] overflow-hidden grid grid-cols-1 md:grid-cols-12"
          >
            <div class="md:col-span-6 relative min-h-[260px]">
              <img
                src="images/vivero-nativo.jpg"
                alt="Plantines nativos cultivados en vivero para jornadas de reforestación"
                width="950"
                height="633"
                decoding="sync"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="md:col-span-6 p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 class="display-title text-2xl sm:text-3xl font-extrabold text-ink-950 leading-tight">
                  Reforestación y bosques nativos
                </h3>
                <p class="mt-4 text-base text-ink-800 leading-relaxed">
                  Restauramos áreas degradadas, cuencas hídricas y corredores verdes urbanos
                  mediante producción en vivero propio y siembra de especies nativas adaptadas, con
                  seguimiento post-plantación.
                </p>
              </div>

              <dl class="mt-7 pt-5 border-t border-ink-950/10 grid grid-cols-2 gap-4">
                <div>
                  <dt class="text-xs font-medium text-ink-700">Supervivencia</dt>
                  <dd
                    class="display-title font-mono tabular-figures text-2xl font-extrabold text-moss-600 mt-0.5"
                  >
                    86%
                  </dd>
                </div>
                <div>
                  <dt class="text-xs font-medium text-ink-700">Superficie restaurada</dt>
                  <dd class="display-title text-2xl font-extrabold text-ink-950 mt-0.5">
                    <span class="font-mono tabular-figures">+45</span> ha
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          <article
            appSpecularTrack
            class="lg:col-span-4 glass-smoked glass-hover rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div class="rounded-2xl overflow-hidden h-44 mb-6 border border-white/15">
                <img
                  src="images/educacion-juvenil.jpg"
                  alt="Programa de educación ambiental y separación de residuos con brigadas juveniles"
                  width="800"
                  height="533"
                  decoding="sync"
                  class="w-full h-full object-cover"
                />
              </div>

              <h3 class="display-title text-2xl font-bold text-white leading-tight">
                Educación ambiental y acción juvenil
              </h3>

              <p class="mt-3 text-sm sm:text-base text-moss-100 leading-relaxed">
                Talleres prácticos en colegios y barrios sobre compostaje, manejo de residuos,
                ahorro hídrico y formación de brigadas ecológicas estudiantiles.
              </p>
            </div>

            <dl class="mt-6 pt-5 border-t border-white/15 flex items-center justify-between gap-4">
              <div>
                <dt class="text-xs text-moss-200">Estudiantes</dt>
                <dd class="font-mono tabular-figures text-white font-bold text-lg mt-0.5">+3.200</dd>
              </div>
              <div class="text-right">
                <dt class="text-xs text-moss-200">Puntos verdes</dt>
                <dd class="text-white font-bold text-lg mt-0.5">
                  <span class="font-mono tabular-figures">28</span> colegios
                </dd>
              </div>
            </dl>
          </article>

          <article
            appSpecularTrack
            class="lg:col-span-12 glass-floating glass-hover rounded-[1.75rem] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center"
          >
            <div class="lg:col-span-5">
              <h3 class="display-title text-2xl sm:text-4xl font-extrabold text-ink-950 leading-tight">
                Huella de carbono cero y economía circular
              </h3>
              <p class="mt-4 text-base text-ink-800 leading-relaxed max-w-[54ch]">
                Acompañamos a emprendimientos, empresas y ciudadanos a diagnosticar su huella
                ecológica, reducir consumos críticos y compensar emisiones de CO<sub>2</sub>
                financiando campañas directas de siembra nativa.
              </p>

              <div
                class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-ink-950/10 text-xs font-semibold text-ink-900"
              >
                <span class="text-moss-700">
                  <span class="font-mono tabular-figures">420</span> t CO<sub>2</sub> compensadas
                </span>
                <span>
                  <span class="font-mono tabular-figures">18</span> organizaciones aliadas
                </span>
              </div>
            </div>

            <div
              class="lg:col-span-4 rounded-2xl overflow-hidden h-56 sm:h-60 border border-white/80 shadow-md"
            >
              <img
                src="images/carbono-cero.jpg"
                alt="Infraestructura de energía limpia y equilibrio ambiental"
                width="950"
                height="633"
                decoding="sync"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="lg:col-span-3 lg:border-l lg:border-ink-950/10 lg:pl-7 pt-4 lg:pt-0 border-t lg:border-t-0 border-ink-950/10 space-y-3"
            >
              <p class="font-display font-bold text-lg text-ink-950 leading-snug">
                ¿Tu empresa o colectivo quiere sumarse?
              </p>
              <p class="text-sm text-ink-800 leading-relaxed">
                Organizamos jornadas corporativas de compensación ambiental con informe de impacto en
                campo.
              </p>
              <a
                href="#contacto"
                class="tactile-btn inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-moss-700 hover:text-ink-950 pt-1"
              >
                <span>Solicitar alianza</span>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ProgramsBentoComponent {}
