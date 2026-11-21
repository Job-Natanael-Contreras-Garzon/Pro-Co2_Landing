import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ambient-backdrop',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ambient-canvas" aria-hidden="true">
      <div class="light-orb orb-canopy"></div>
      <div class="light-orb orb-sunlight"></div>
      <div class="light-orb orb-mineral"></div>
      <div class="light-orb orb-shade"></div>
    </div>
  `,
  styles: [
    `
      .ambient-canvas {
        position: fixed;
        inset: 0;
        z-index: -1;
        overflow: hidden;
        background:
          radial-gradient(circle at 12% 16%, rgba(235, 223, 198, 0.88), transparent 54%),
          radial-gradient(circle at 86% 18%, rgba(190, 224, 206, 0.88), transparent 52%),
          linear-gradient(155deg, #e7ebe4 0%, #dbe5de 50%, #e5e2d8 100%);
        pointer-events: none;
      }

      .light-orb {
        position: absolute;
        border-radius: 9999px;
        filter: blur(92px);
        will-change: transform;
        opacity: 0.62;
      }

      .orb-canopy {
        width: 50vw;
        height: 50vw;
        min-width: 340px;
        min-height: 340px;
        top: -12%;
        right: -8%;
        background: radial-gradient(
          circle,
          rgba(22, 118, 78, 0.5) 0%,
          rgba(22, 118, 78, 0) 70%
        );
        animation: driftA 26s ease-in-out infinite alternate;
      }

      .orb-sunlight {
        width: 42vw;
        height: 42vw;
        min-width: 280px;
        min-height: 280px;
        top: 28%;
        left: -10%;
        background: radial-gradient(
          circle,
          rgba(199, 140, 50, 0.4) 0%,
          rgba(199, 140, 50, 0) 72%
        );
        animation: driftB 30s ease-in-out infinite alternate;
      }

      .orb-mineral {
        width: 46vw;
        height: 46vw;
        min-width: 300px;
        min-height: 300px;
        bottom: -14%;
        right: 12%;
        background: radial-gradient(
          circle,
          rgba(46, 146, 126, 0.42) 0%,
          rgba(46, 146, 126, 0) 72%
        );
        animation: driftC 34s ease-in-out infinite alternate;
      }

      .orb-shade {
        width: 36vw;
        height: 36vw;
        min-width: 240px;
        min-height: 240px;
        bottom: 24%;
        left: 26%;
        background: radial-gradient(
          circle,
          rgba(16, 82, 54, 0.24) 0%,
          rgba(16, 82, 54, 0) 72%
        );
        animation: driftB 28s ease-in-out infinite alternate-reverse;
      }

      @keyframes driftA {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
          transform: translate3d(-7vw, 9vh, 0) scale(1.12);
        }
      }

      @keyframes driftB {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
          transform: translate3d(9vw, -7vh, 0) scale(1.1);
        }
      }

      @keyframes driftC {
        0% {
          transform: translate3d(0, 0, 0) scale(1.04);
        }
        100% {
          transform: translate3d(-6vw, -10vh, 0) scale(0.96);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .light-orb {
          animation: none !important;
        }
      }
    `,
  ],
})
export class AmbientBackdropComponent {}
