import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Fundación CO2 main headline and donation section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Bosque vivo frente a la huella de carbono.'
    );
    expect(compiled.querySelector('#donaciones')?.textContent).toContain('1000-0045-8921-02');
  });

  it('should filter journal articles by category', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const eduButton = Array.from(compiled.querySelectorAll('#noticias button')).find((btn) =>
      btn.textContent?.includes('Educación')
    ) as HTMLButtonElement | undefined;

    expect(eduButton).toBeTruthy();
    eduButton?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#noticias [aria-live="polite"]')?.textContent).toContain(
      '1 publicación'
    );
  });

  it('should update selected donation tier impact banner', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const parcelButton = Array.from(
      compiled.querySelectorAll('#donaciones [role="group"] button')
    ).find((btn) => btn.textContent?.includes('350 Bs')) as HTMLButtonElement | undefined;

    expect(parcelButton).toBeTruthy();
    parcelButton?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#donaciones [aria-live="polite"]')?.textContent).toContain(
      '350 Bs'
    );
  });
});
