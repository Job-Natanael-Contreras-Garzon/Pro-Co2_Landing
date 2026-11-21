import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT_SUBJECTS, FOUNDATION_CONTACT } from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contacto" class="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 space-y-5">
            <div class="pb-3">
              <h2
                class="display-title text-3xl sm:text-5xl font-extrabold text-ink-950 leading-[1.02]"
              >
                Hablemos sobre tu próximo paso verde.
              </h2>
              <p class="mt-4 text-base text-ink-800 leading-relaxed max-w-[46ch]">
                Atención directa para voluntariado, donaciones, talleres escolares y alianzas de
                sostenibilidad en Bolivia.
              </p>
            </div>

            <a
              [href]="whatsappBaseHref"
              target="_blank"
              rel="noopener noreferrer"
              appSpecularTrack
              class="glass-floating glass-hover rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 group"
            >
              <div class="flex items-center gap-4">
                <span
                  class="w-11 h-11 rounded-xl bg-moss-100 text-moss-700 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.391c1.469.797 3.094 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.438 1.344-2 1.422-.531.078-1.203.109-1.938-.125-.453-.141-1.031-.344-1.766-.672-3.109-1.344-5.141-4.484-5.297-4.688-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.313.625-.391.828-.391.203 0 .422.016.609.016.188 0 .453-.078.703.531.266.625.891 2.172.969 2.328.078.156.125.344.016.547-.109.203-.156.344-.313.531-.156.188-.328.406-.469.547-.156.156-.328.328-.141.641.188.313.844 1.391 1.813 2.25 1.25 1.109 2.297 1.453 2.609 1.609.313.156.5.141.688-.078.188-.219.797-.922 1.016-1.234.219-.313.438-.266.734-.156.297.109 1.891.891 2.219 1.047.328.156.547.234.625.375.078.141.078.813-.172 1.516z"
                    />
                  </svg>
                </span>
                <div>
                  <span class="block text-xs font-medium text-ink-700">WhatsApp y teléfono</span>
                  <span
                    class="font-display font-mono tabular-figures font-bold text-lg text-ink-950 group-hover:text-moss-700"
                  >
                    {{ contact.whatsappDisplay }}
                  </span>
                </div>
              </div>
              <svg
                class="w-4 h-4 text-moss-700 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>

            <a
              [href]="mailtoBaseHref"
              appSpecularTrack
              class="glass-floating glass-hover rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 group"
            >
              <div class="flex items-center gap-4 min-w-0">
                <span
                  class="w-11 h-11 rounded-xl bg-moss-100 text-moss-700 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div class="min-w-0">
                  <span class="block text-xs font-medium text-ink-700">Correo electrónico</span>
                  <span
                    class="font-display font-bold text-base sm:text-lg text-ink-950 group-hover:text-moss-700 block truncate"
                  >
                    {{ contact.email }}
                  </span>
                </div>
              </div>
              <svg
                class="w-4 h-4 text-moss-700 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>

            <div class="pt-2 text-sm text-ink-700">
              <p class="font-semibold text-ink-950">Atención en campo y alianzas</p>
              <p class="mt-1">
                {{ contact.location }} · Coordinación de jornadas escolares, donaciones y proyectos
                empresariales.
              </p>
            </div>
          </div>

          <div appSpecularTrack class="lg:col-span-7 glass-floating rounded-[1.75rem] p-7 sm:p-10">
            <div class="pb-5 border-b border-ink-950/10">
              <h3 class="display-title text-2xl sm:text-3xl font-extrabold text-ink-950">
                Enviar un mensaje
              </h3>
              <p class="text-sm text-ink-700 mt-1">
                Redacta tu consulta y envíala directamente por WhatsApp o desde tu aplicación de
                correo.
              </p>
            </div>

            <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="mt-6 space-y-5" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    for="contact-name"
                    class="block text-xs uppercase tracking-wider font-semibold text-ink-800 mb-1.5"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    required
                    minlength="3"
                    [(ngModel)]="name"
                    placeholder="Ej. Lucía Mendoza"
                    class="mwg-field w-full px-4 py-3.5 rounded-xl border border-ink-950/15 bg-white/80 text-ink-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-600 transition-colors"
                  />
                  <p class="mwg-error text-xs text-red-700 mt-1">
                    Ingresa tu nombre completo (mínimo 3 caracteres).
                  </p>
                </div>

                <div>
                  <label
                    for="contact-email"
                    class="block text-xs uppercase tracking-wider font-semibold text-ink-800 mb-1.5"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    [(ngModel)]="email"
                    placeholder="nombre@correo.com"
                    class="mwg-field w-full px-4 py-3.5 rounded-xl border border-ink-950/15 bg-white/80 text-ink-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-600 transition-colors"
                  />
                  <p class="mwg-error text-xs text-red-700 mt-1">
                    Ingresa un correo electrónico válido.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    for="contact-phone"
                    class="block text-xs uppercase tracking-wider font-semibold text-ink-800 mb-1.5"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    [(ngModel)]="phone"
                    placeholder="+591 70000000"
                    class="w-full px-4 py-3.5 rounded-xl border border-ink-950/15 bg-white/80 text-ink-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    for="contact-subject"
                    class="block text-xs uppercase tracking-wider font-semibold text-ink-800 mb-1.5"
                  >
                    Motivo de consulta *
                  </label>
                  <div class="relative">
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      [(ngModel)]="subject"
                      class="mwg-field appearance-none w-full pl-4 pr-10 py-3.5 rounded-xl border border-ink-950/15 bg-white/80 text-ink-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-600 transition-colors"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      @for (option of subjects; track option) {
                        <option [value]="option">{{ option }}</option>
                      }
                    </select>
                    <svg
                      class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-700"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <p class="mwg-error text-xs text-red-700 mt-1">
                    Selecciona un motivo de contacto.
                  </p>
                </div>
              </div>

              <div>
                <label
                  for="contact-message"
                  class="block text-xs uppercase tracking-wider font-semibold text-ink-800 mb-1.5"
                >
                  Mensaje *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minlength="10"
                  [(ngModel)]="message"
                  placeholder="Cuéntanos cómo deseas participar o qué proyecto ambiental te gustaría impulsar..."
                  class="mwg-field auto-grow w-full px-4 py-3.5 rounded-xl border border-ink-950/15 bg-white/80 text-ink-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-600 transition-colors resize-y"
                ></textarea>
                <p class="mwg-error text-xs text-red-700 mt-1">
                  Escribe al menos 10 caracteres para que podamos ayudarte mejor.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  class="tactile-btn flex-1 inline-flex items-center justify-center gap-2.5 bg-ink-950 hover:bg-moss-700 text-white text-xs uppercase tracking-wider font-bold px-6 py-4 rounded-2xl shadow-lg"
                >
                  <span>Preparar envío por WhatsApp</span>
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
                </button>
                <button
                  type="button"
                  (click)="sendViaMailto()"
                  class="tactile-btn inline-flex items-center justify-center gap-2 bg-white/85 hover:bg-white text-ink-950 border border-ink-950/15 text-xs uppercase tracking-wider font-semibold px-5 py-4 rounded-2xl"
                >
                  <span>Abrir por correo</span>
                </button>
              </div>
            </form>

            @if (prepared()) {
              <div
                role="status"
                aria-live="polite"
                class="mt-6 p-5 rounded-2xl bg-moss-100 border border-moss-600/25 text-ink-950 space-y-3"
              >
                <div>
                  <p class="font-display font-bold text-base">
                    Tu consulta quedó lista para enviar
                  </p>
                  <p class="text-sm text-ink-800 mt-1">
                    Conservamos tus datos en pantalla para que elijas el canal de envío directo:
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    (click)="sendViaWhatsapp()"
                    class="tactile-btn inline-flex items-center gap-2 bg-ink-950 hover:bg-moss-700 text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-xl"
                  >
                    <span>Enviar por WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    (click)="sendViaMailto()"
                    class="tactile-btn inline-flex items-center gap-2 bg-white text-ink-950 border border-ink-950/15 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-xl"
                  >
                    <span>Enviar por correo</span>
                  </button>
                  <button
                    type="button"
                    (click)="resetManual(contactForm)"
                    class="text-xs font-semibold text-ink-700 hover:text-ink-950 underline ml-auto"
                  >
                    Limpiar formulario
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  private readonly toast = inject(ToastService);

  readonly contact = FOUNDATION_CONTACT;
  readonly subjects = CONTACT_SUBJECTS;
  readonly whatsappBaseHref = `https://wa.me/${FOUNDATION_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hola Fundación CO2, me gustaría ponerme en contacto con ustedes.'
  )}`;
  readonly mailtoBaseHref = `mailto:${FOUNDATION_CONTACT.email}?subject=${encodeURIComponent(
    'Consulta — Fundación CO2'
  )}`;

  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';

  readonly prepared = signal(false);

  onSubmit(form: { valid: boolean | null }): void {
    const nativeForm = document.querySelector('#contacto form') as HTMLFormElement | null;
    if (!form.valid || (nativeForm && !nativeForm.checkValidity())) {
      nativeForm?.reportValidity();
      this.toast.show('Revisa los campos obligatorios marcados.');
      return;
    }

    this.prepared.set(true);
    this.sendViaWhatsapp();
    this.toast.show('Consulta lista: elige WhatsApp o correo para enviarla.');
  }

  sendViaWhatsapp(): void {
    const fullText = this.buildPayloadText();
    window.open(
      `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(fullText)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  sendViaMailto(): void {
    const topic = this.subject || 'Consulta general';
    const body = this.buildPayloadText();
    const mailUrl = `mailto:${this.contact.email}?subject=${encodeURIComponent(
      `${topic} — Fundación CO2`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailUrl;
  }

  resetManual(form: { resetForm: () => void }): void {
    form.resetForm();
    this.subject = '';
    this.prepared.set(false);
  }

  private buildPayloadText(): string {
    const sender = this.name.trim() || 'Visitante web';
    const senderEmail = this.email.trim();
    const senderPhone = this.phone.trim();
    const topic = this.subject || 'Consulta general';
    const body = this.message.trim() || 'Deseo recibir información sobre Fundación CO2.';
    const details = [
      `Hola Fundación CO2, soy ${sender}.`,
      `Motivo: ${topic}.`,
      senderEmail ? `Correo: ${senderEmail}.` : '',
      senderPhone ? `Teléfono: ${senderPhone}.` : '',
      `Mensaje: ${body}`,
    ].filter(Boolean);
    return details.join(' ');
  }
}
