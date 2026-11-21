import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AmbientBackdropComponent } from './components/ambient-backdrop/ambient-backdrop.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DonationsMesaComponent } from './components/donations-mesa/donations-mesa.component';
import { HeroManifestoComponent } from './components/hero-manifesto/hero-manifesto.component';
import { InstitutionalManifestoComponent } from './components/institutional-manifesto/institutional-manifesto.component';
import { JournalSectionComponent } from './components/journal-section/journal-section.component';
import { ProgramsBentoComponent } from './components/programs-bento/programs-bento.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ToastPopoverComponent } from './components/toast-popover/toast-popover.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AmbientBackdropComponent,
    SiteHeaderComponent,
    HeroManifestoComponent,
    InstitutionalManifestoComponent,
    ProgramsBentoComponent,
    JournalSectionComponent,
    DonationsMesaComponent,
    ContactSectionComponent,
    SiteFooterComponent,
    ToastPopoverComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

