import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import {
  NEWS_ARTICLES,
  NEWS_CATEGORIES,
  NewsArticle,
  NewsCategoryFilter,
} from '../../data/foundation.data';
import { SpecularTrackDirective } from '../../directives/specular-track.directive';

@Component({
  selector: 'app-journal-section',
  standalone: true,
  imports: [SpecularTrackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="noticias" class="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-ink-950/12"
        >
          <div class="max-w-2xl">
            <h2
              class="display-title text-3xl sm:text-5xl font-extrabold text-ink-950 leading-[1.02]"
            >
              Crónicas de campo, eventos y avances comunitarios.
            </h2>
          </div>
          <p class="text-base text-ink-800 max-w-sm leading-relaxed">
            Registro abierto de nuestras jornadas de reforestación, talleres escolares y ferias
            ciudadanas en Bolivia.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 py-6">
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar crónicas por categoría">
            @for (category of categories; track category) {
              <button
                type="button"
                (click)="selectCategory(category)"
                [attr.aria-pressed]="activeCategory() === category"
                [class]="
                  activeCategory() === category
                    ? 'px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold bg-ink-950 text-white transition-colors'
                    : 'px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold bg-white/75 text-ink-800 hover:bg-white transition-colors border border-ink-950/10'
                "
              >
                {{ category }}
              </button>
            }
          </div>

          <p aria-live="polite" class="text-xs text-ink-700 font-medium">
            <span class="font-mono tabular-figures">{{ filteredArticles().length }}</span>
            {{ filteredArticles().length === 1 ? 'publicación' : 'publicaciones' }}
          </p>
        </div>

        @if (filteredArticles().length === 0) {
          <div class="glass-sheet text-center py-14 rounded-2xl">
            <p class="text-sm text-ink-700">
              No hay crónicas registradas en esta categoría por el momento.
            </p>
          </div>
        } @else {
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            @for (article of filteredArticles(); track article.id; let idx = $index) {
              @if (idx === 0) {
                <article
                  appSpecularTrack
                  [class]="
                    filteredArticles().length === 1
                      ? 'lg:col-span-12 glass-floating glass-hover rounded-[1.75rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 group'
                      : 'lg:col-span-7 glass-floating glass-hover rounded-[1.75rem] overflow-hidden flex flex-col justify-between group'
                  "
                >
                  <div
                    [class]="
                      filteredArticles().length === 1
                        ? 'md:col-span-6 relative min-h-[260px] overflow-hidden bg-ink-950'
                        : 'relative h-64 sm:h-72 overflow-hidden bg-ink-950'
                    "
                  >
                    <img
                      [src]="article.image"
                      [alt]="article.imageAlt"
                      decoding="sync"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent"
                    ></div>
                    <span
                      class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-ink-950"
                    >
                      {{ article.category }}
                    </span>
                  </div>

                  <div
                    [class]="
                      filteredArticles().length === 1
                        ? 'md:col-span-6 p-6 sm:p-8 flex flex-col justify-between'
                        : 'p-6 sm:p-8 flex-1 flex flex-col justify-between'
                    "
                  >
                    <div>
                      <time class="font-mono tabular-figures text-xs text-ink-700">
                        {{ article.date }}
                      </time>
                      <h3
                        class="display-title text-2xl sm:text-3xl font-extrabold text-ink-950 mt-2 leading-tight group-hover:text-moss-700 transition-colors"
                      >
                        {{ article.title }}
                      </h3>
                      <p class="mt-3 text-base text-ink-800 leading-relaxed max-w-[56ch]">
                        {{ article.excerpt }}
                      </p>
                    </div>

                    <div class="mt-6 pt-4 border-t border-ink-950/10">
                      <button
                        type="button"
                        (click)="openArticle(article)"
                        class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-ink-950 hover:text-moss-600 py-1"
                      >
                        <span>Leer crónica completa</span>
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
                            d="M5 12h14m-6-6l6 6-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              } @else if (idx === 1) {
                <article
                  appSpecularTrack
                  class="lg:col-span-5 glass-sheet glass-hover rounded-[1.75rem] overflow-hidden flex flex-col justify-between group"
                >
                  <div class="relative h-56 overflow-hidden bg-ink-950">
                    <img
                      [src]="article.image"
                      [alt]="article.imageAlt"
                      decoding="sync"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      class="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-ink-950"
                    >
                      {{ article.category }}
                    </span>
                  </div>

                  <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <time class="font-mono tabular-figures text-xs text-ink-700">
                        {{ article.date }}
                      </time>
                      <h3
                        class="display-title text-xl sm:text-2xl font-bold text-ink-950 mt-2 leading-snug group-hover:text-moss-700 transition-colors"
                      >
                        {{ article.title }}
                      </h3>
                      <p class="mt-2.5 text-base text-ink-800 leading-relaxed">
                        {{ article.excerpt }}
                      </p>
                    </div>

                    <div class="mt-5 pt-4 border-t border-ink-950/10">
                      <button
                        type="button"
                        (click)="openArticle(article)"
                        class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-moss-700 hover:text-ink-950 py-1"
                      >
                        <span>Abrir artículo</span>
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
                            d="M5 12h14m-6-6l6 6-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              } @else {
                <article
                  appSpecularTrack
                  class="lg:col-span-12 glass-sheet glass-hover rounded-[1.75rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch group"
                >
                  <div class="md:col-span-5 relative h-56 md:h-64 overflow-hidden bg-ink-950">
                    <img
                      [src]="article.image"
                      [alt]="article.imageAlt"
                      decoding="sync"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-ink-950"
                    >
                      {{ article.category }}
                    </span>
                  </div>

                  <div class="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <time class="font-mono tabular-figures text-xs text-ink-700">
                        {{ article.date }}
                      </time>
                      <h3
                        class="display-title text-2xl font-bold text-ink-950 mt-2 leading-snug group-hover:text-moss-700 transition-colors"
                      >
                        {{ article.title }}
                      </h3>
                      <p class="mt-3 text-base text-ink-800 leading-relaxed max-w-[58ch]">
                        {{ article.excerpt }}
                      </p>
                    </div>

                    <div class="mt-5 pt-4 border-t border-ink-950/10">
                      <button
                        type="button"
                        (click)="openArticle(article)"
                        class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-moss-700 hover:text-ink-950 py-1"
                      >
                        <span>Abrir artículo</span>
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
                            d="M5 12h14m-6-6l6 6-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              }
            }
          </div>
        }
      </div>
    </section>

    <dialog
      #readerDialog
      closedby="any"
      (click)="onDialogBackdropClick($event)"
      (close)="onDialogClosed()"
      aria-labelledby="reader-title"
      class="modern-dialog glass-floating m-auto w-[94vw] max-w-2xl rounded-[1.75rem] p-0 text-ink-950 overflow-hidden"
    >
      @if (selectedArticle(); as article) {
        <div class="relative max-h-[88vh] overflow-y-auto">
          <div class="relative h-56 sm:h-64 bg-ink-950">
            <img
              [src]="article.image"
              [alt]="article.imageAlt"
              class="w-full h-full object-cover"
            />
            <button
              type="button"
              (click)="closeReader()"
              aria-label="Cerrar artículo"
              class="absolute top-4 right-4 p-2.5 rounded-full bg-ink-950/80 hover:bg-ink-950 text-white backdrop-blur-md"
            >
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
            </button>
            <span
              class="absolute bottom-4 left-6 bg-ink-950/85 text-moss-200 text-xs font-semibold px-3.5 py-1 rounded-full border border-white/15"
            >
              {{ article.category }}
            </span>
          </div>

          <div class="p-6 sm:p-8">
            <time class="font-mono tabular-figures text-xs text-ink-700">
              {{ article.date }}
            </time>
            <h3
              id="reader-title"
              class="display-title text-2xl sm:text-3xl font-extrabold text-ink-950 mt-2 leading-tight"
            >
              {{ article.title }}
            </h3>
            <p class="mt-4 text-ink-800 leading-relaxed text-base whitespace-pre-line">
              {{ article.content }}
            </p>
            <div
              class="mt-8 pt-5 border-t border-ink-950/10 flex flex-wrap items-center justify-between gap-3"
            >
              <a
                href="#donaciones"
                (click)="closeReader()"
                class="tactile-btn inline-flex items-center gap-2 bg-ink-950 hover:bg-moss-700 text-white text-xs uppercase tracking-wider font-semibold px-5 py-3 rounded-xl"
              >
                <span>Apoyar esta causa</span>
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
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </a>
              <button
                type="button"
                (click)="closeReader()"
                class="px-5 py-3 rounded-xl bg-white/80 hover:bg-white text-ink-900 text-xs uppercase font-semibold border border-ink-950/12"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      }
    </dialog>
  `,
})
export class JournalSectionComponent {
  private readonly readerDialog = viewChild<ElementRef<HTMLDialogElement>>('readerDialog');

  readonly categories = NEWS_CATEGORIES;
  readonly activeCategory = signal<NewsCategoryFilter>('Todas');
  readonly selectedArticle = signal<NewsArticle | null>(null);

  readonly filteredArticles = computed(() => {
    const category = this.activeCategory();
    if (category === 'Todas') return NEWS_ARTICLES;
    return NEWS_ARTICLES.filter((item) => item.category === category);
  });

  selectCategory(category: NewsCategoryFilter): void {
    const apply = () => this.activeCategory.set(category);
    const reducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const doc = document as Document & { startViewTransition?: (cb: () => void) => void };
    if (typeof doc.startViewTransition === 'function' && !reducedMotion) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  }

  openArticle(article: NewsArticle): void {
    this.selectedArticle.set(article);
    const dialog = this.readerDialog()?.nativeElement;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }

  closeReader(): void {
    const dialog = this.readerDialog()?.nativeElement;
    if (dialog?.open) {
      dialog.close();
    }
  }

  onDialogBackdropClick(event: MouseEvent): void {
    const dialog = this.readerDialog()?.nativeElement;
    if (dialog && event.target === dialog) {
      dialog.close();
    }
  }

  onDialogClosed(): void {
    this.selectedArticle.set(null);
  }
}
