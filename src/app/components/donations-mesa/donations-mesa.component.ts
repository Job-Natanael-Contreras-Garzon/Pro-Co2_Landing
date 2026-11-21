import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  DONATION_FAQS,
  DONATION_TIERS,
  DonationTier,
  FOUNDATION_CONTACT,
} from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-donations-mesa',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="donaciones" class="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-7xl mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-9 border-b border-ink-950/12"
        >
          <div class="lg:col-span-7">
            <h2
              class="display-title text-3xl sm:text-5xl font-extrabold text-ink-950 leading-[1.0]"
            >
              Financia bosques nativos directo y sin intermediarios.
            </h2>
          </div>
          <div class="lg:col-span-5">
            <p class="text-base text-ink-800 leading-relaxed max-w-[48ch]">
              Aporta al instante desde cualquier banco en Bolivia mediante
              <strong class="text-ink-950">QR Simple interoperable</strong> o transferencia bancaria
              directa. Cero comisiones de pasarela.
            </p>
          </div>
        </div>

        <div class="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div
            appSpecularTrack
            class="lg:col-span-5 glass-floating rounded-[1.75rem] p-6 sm:p-8 text-ink-950 flex flex-col justify-between gap-6"
          >
            <div class="flex items-center justify-between gap-3">
              <h3 class="display-title text-xl font-bold text-ink-950">QR Simple · Bolivia</h3>
              <span class="text-xs font-semibold text-moss-700 bg-moss-100 px-3 py-1 rounded-full">
                Interoperable
              </span>
            </div>

            <div class="flex flex-col items-center text-center">
              <svg
                #qrSvg
                class="w-48 h-48 sm:w-52 sm:h-52 rounded-xl bg-white p-2.5 shadow-sm"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Código QR Simple referencial de Fundación CO2"
              >
                <rect width="120" height="120" rx="8" fill="white" />
                <rect x="10" y="10" width="28" height="28" rx="4" stroke="#0a1c14" stroke-width="5" />
                <rect x="18" y="18" width="12" height="12" rx="2" fill="#146342" />
                <rect x="82" y="10" width="28" height="28" rx="4" stroke="#0a1c14" stroke-width="5" />
                <rect x="90" y="18" width="12" height="12" rx="2" fill="#146342" />
                <rect x="10" y="82" width="28" height="28" rx="4" stroke="#0a1c14" stroke-width="5" />
                <rect x="18" y="90" width="12" height="12" rx="2" fill="#146342" />
                <rect x="46" y="10" width="6" height="6" fill="#0a1c14" />
                <rect x="58" y="10" width="6" height="6" fill="#0a1c14" />
                <rect x="70" y="16" width="6" height="6" fill="#0a1c14" />
                <rect x="46" y="22" width="12" height="6" fill="#0a1c14" />
                <rect x="64" y="28" width="12" height="6" fill="#0a1c14" />
                <rect x="10" y="46" width="6" height="12" fill="#0a1c14" />
                <rect x="22" y="46" width="12" height="6" fill="#0a1c14" />
                <rect x="16" y="64" width="18" height="6" fill="#0a1c14" />
                <rect x="82" y="46" width="12" height="6" fill="#0a1c14" />
                <rect x="100" y="46" width="10" height="12" fill="#0a1c14" />
                <rect x="82" y="64" width="6" height="12" fill="#0a1c14" />
                <rect x="94" y="64" width="16" height="6" fill="#0a1c14" />
                <rect x="46" y="82" width="12" height="6" fill="#0a1c14" />
                <rect x="64" y="82" width="12" height="12" fill="#0a1c14" />
                <rect x="46" y="94" width="6" height="16" fill="#0a1c14" />
                <rect x="58" y="102" width="18" height="8" fill="#0a1c14" />
                <rect x="82" y="88" width="12" height="12" fill="#0a1c14" />
                <rect x="100" y="82" width="10" height="6" fill="#0a1c14" />
                <rect x="98" y="96" width="12" height="14" fill="#0a1c14" />
                <rect x="44" y="44" width="32" height="32" rx="8" fill="#0a1c14" />
                <text
                  x="60"
                  y="65"
                  text-anchor="middle"
                  fill="#b2dfc6"
                  font-family="Source Sans 3, sans-serif"
                  font-weight="700"
                  font-size="13"
                >
                  CO2
                </text>
              </svg>
              <p class="text-xs text-ink-700 font-medium mt-3">
                QR referencial · Fundación CO2 Bolivia
              </p>
            </div>

            <div class="pt-5 border-t border-ink-950/10 space-y-4">
              <ol class="space-y-2 text-xs sm:text-sm text-ink-800 list-decimal list-inside leading-relaxed">
                <li>Abre tu app bancaria en <strong>Pago con QR Simple</strong>.</li>
                <li>Escanea el código o importa la imagen descargada.</li>
                <li>Confirma el monto y envíanos el comprobante por WhatsApp.</li>
              </ol>

              <button
                type="button"
                (click)="downloadQr()"
                class="tactile-btn w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-ink-950 hover:bg-moss-700 text-white text-xs uppercase tracking-wider font-semibold"
              >
                <svg
                  class="w-4 h-4 text-moss-300"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Descargar imagen QR</span>
              </button>
            </div>
          </div>

          <div
            appSpecularTrack
            class="lg:col-span-7 glass-smoked rounded-[1.75rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-7"
          >
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                <span class="text-xs font-semibold uppercase tracking-wider text-moss-200">
                  Elige un aporte referencial
                </span>
                <span aria-live="polite" class="text-xs text-amberleaf-300 font-medium">
                  <span class="font-mono tabular-figures">{{ selectedTier().amount }}</span>
                  — {{ selectedTier().fullImpact }}
                </span>
              </div>

              <div
                class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
                role="group"
                aria-label="Montos referenciales de donación"
              >
                @for (tier of tiers; track tier.id) {
                  <button
                    type="button"
                    (click)="selectTier(tier)"
                    [attr.aria-pressed]="selectedTier().id === tier.id"
                    [class]="
                      selectedTier().id === tier.id
                        ? 'tactile-btn p-3.5 rounded-xl border border-moss-300 bg-moss-500/30 text-left'
                        : 'tactile-btn p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-left'
                    "
                  >
                    <span
                      [class]="
                        tier.recommended
                          ? 'block text-xs font-semibold text-amberleaf-300'
                          : 'block text-xs font-medium text-moss-200'
                      "
                    >
                      {{ tier.name }}
                    </span>
                    <span
                      [class]="
                        tier.id === 'libre'
                          ? 'display-title text-xl font-extrabold text-white block mt-0.5'
                          : 'display-title font-mono tabular-figures text-xl font-extrabold text-white block mt-0.5'
                      "
                    >
                      {{ tier.amount }}
                    </span>
                    <span class="text-xs text-moss-100 block mt-0.5">
                      {{ tier.shortImpact }}
                    </span>
                  </button>
                }
              </div>
            </div>

            <div class="space-y-5 py-6 border-t border-b border-white/15">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="display-title text-xl sm:text-2xl font-bold text-white">
                  Transferencia bancaria directa
                </h3>
                <span class="text-xs font-medium text-moss-200">{{ contact.currency }}</span>
              </div>

              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt class="text-xs text-moss-200">Titular</dt>
                  <dd class="font-display font-bold text-base text-white mt-0.5">
                    {{ contact.bankHolder }}
                  </dd>
                </div>
                <div>
                  <dt class="text-xs text-moss-200">Entidad bancaria</dt>
                  <dd class="text-sm sm:text-base font-medium text-white mt-0.5">
                    {{ contact.bankEntity }}
                  </dd>
                </div>
              </dl>

              <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span class="block text-xs text-moss-200">Número de cuenta bancaria</span>
                  <span
                    class="font-mono tabular-figures text-xl sm:text-2xl font-bold text-white tracking-wider block mt-0.5"
                  >
                    {{ contact.bankAccount }}
                  </span>
                </div>
                <button
                  type="button"
                  (click)="copyBankAccount()"
                  class="tactile-btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-moss-300 hover:bg-moss-200 text-ink-950 text-xs uppercase tracking-wider font-bold shrink-0"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copiar cuenta</span>
                </button>
              </div>

              <p class="text-xs sm:text-sm text-moss-100 leading-relaxed">
                Compatible con Banco Unión, BNB, Mercantil Santa Cruz, BCP, Bisa, Ganadero,
                Económico y todas las billeteras con QR Simple en Bolivia.
              </p>
            </div>

            <div>
              <h3 class="display-title text-xl font-bold text-white">Confirmación inmediata</h3>
              <p class="text-sm text-moss-100 mt-1.5 mb-4 max-w-[54ch] leading-relaxed">
                Envíanos tu comprobante por WhatsApp para registrar tu aporte, asignarlo al programa
                que elijas y compartirte reportes de avance.
              </p>
              <a
                [href]="whatsappReceiptHref()"
                target="_blank"
                rel="noopener noreferrer"
                class="tactile-btn w-full inline-flex items-center justify-center gap-3 bg-moss-300 hover:bg-moss-200 text-ink-950 font-display font-extrabold text-base sm:text-lg px-6 py-4 rounded-2xl shadow-xl"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.391c1.469.797 3.094 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.438 1.344-2 1.422-.531.078-1.203.109-1.938-.125-.453-.141-1.031-.344-1.766-.672-3.109-1.344-5.141-4.484-5.297-4.688-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.313.625-.391.828-.391.203 0 .422.016.609.016.188 0 .453-.078.703.531.266.625.891 2.172.969 2.328.078.156.125.344.016.547-.109.203-.156.344-.313.531-.156.188-.328.406-.469.547-.156.156-.328.328-.141.641.188.313.844 1.391 1.813 2.25 1.25 1.109 2.297 1.453 2.609 1.609.313.156.5.141.688-.078.188-.219.797-.922 1.016-1.234.219-.313.438-.266.734-.156.297.109 1.891.891 2.219 1.047.328.156.547.234.625.375.078.141.078.813-.172 1.516z"
                  />
                </svg>
                <span>Enviar comprobante por WhatsApp</span>
              </a>
              <p class="mt-3 text-xs text-moss-200 text-center">
                Aporte directo a cuenta institucional, sin comisiones de pasarela.
              </p>
            </div>
          </div>
        </div>

        <div
          class="mt-8 glass-sheet rounded-[1.75rem] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          <div class="lg:col-span-4">
            <h3 class="display-title text-2xl font-bold text-ink-950">
              Consultas frecuentes sobre tu donación
            </h3>
          </div>

          <div
            class="lg:col-span-8 divide-y divide-ink-950/10 border-t border-b border-ink-950/10"
          >
            @for (faq of faqs; track faq.question) {
              <details name="faq-donaciones" class="modern-accordion">
                <summary
                  class="flex items-center justify-between gap-4 py-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-ink-950 hover:text-moss-700 transition-colors"
                >
                  <span>{{ faq.question }}</span>
                  <svg
                    class="accordion-plus w-4 h-4 text-moss-700 transition-transform duration-300 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m-7-7h14" />
                  </svg>
                </summary>
                <div class="pb-5 text-sm sm:text-base text-ink-800 leading-relaxed max-w-[62ch]">
                  {{ faq.answer }}
                </div>
              </details>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DonationsMesaComponent {
  private readonly toast = inject(ToastService);
  private readonly qrSvg = viewChild<ElementRef<SVGSVGElement>>('qrSvg');

  readonly contact = FOUNDATION_CONTACT;
  readonly tiers = DONATION_TIERS;
  readonly faqs = DONATION_FAQS;

  readonly selectedTier = signal<DonationTier>(
    DONATION_TIERS.find((tier) => tier.recommended) ?? DONATION_TIERS[0]
  );

  readonly whatsappReceiptHref = computed(() => {
    const amount = this.selectedTier().amount;
    const message = `Hola Fundación CO2, acabo de realizar una donación (${amount}) para apoyar sus programas ambientales. Adjunto mi comprobante.`;
    return `https://wa.me/${FOUNDATION_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  });

  selectTier(tier: DonationTier): void {
    this.selectedTier.set(tier);
  }

  async copyBankAccount(): Promise<void> {
    const account = this.contact.bankAccount;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(account);
      } else {
        this.fallbackCopy(account);
      }
      this.toast.show(`Cuenta ${account} copiada al portapapeles.`);
    } catch {
      try {
        this.fallbackCopy(account);
        this.toast.show(`Cuenta ${account} copiada al portapapeles.`);
      } catch {
        this.toast.show('Copia manualmente el número de cuenta bancaria.');
      }
    }
  }

  downloadQr(): void {
    const svgEl = this.qrSvg()?.nativeElement;
    if (!svgEl) return;

    try {
      const serializer = new XMLSerializer();
      const blob = new Blob([serializer.serializeToString(svgEl)], {
        type: 'image/svg+xml;charset=utf-8',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'QR-Simple-Fundacion-CO2.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      this.toast.show('Imagen QR Simple descargada correctamente.');
    } catch {
      this.toast.show('No se pudo descargar la imagen en este navegador.');
    }
  }

  private fallbackCopy(value: string): void {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}
