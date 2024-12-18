import { Component, signal, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <header class="w-full h-20 text-white fixed z-50">
      <nav class="container mx-auto p-4 flex justify-between items-center relative">
        <a routerLink="/">
          <img src="header_logo.png" 
               class="w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] md:w-[160px] md:h-[50px] aspect-auto object-contain" 
               alt="Header Logo" />
        </a>
        <div class="hidden md:flex space-x-4 z-20">
          <a href="/#about" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg inline-flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">info</span>
            About Us
          </a>
          <a href="/#games" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg inline-flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">sports_esports</span>
            Games
          </a>
          <a routerLink="/team" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg inline-flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">group</span>
            Team
          </a>
        </div>
        <button 
          class="md:hidden flex flex-col justify-center justify-items-center w-8 h-8 space-y-1.5"
          (click)="toggleMenu()"
          aria-label="Toggle menu">
          <span class="w-6 h-0.5 bg-white transform transition-transform duration-300" 
            [ngClass]="{'rotate-45 translate-y-2': isMenuOpen()}"></span>
          <span class="w-6 h-0.5 bg-white transition-opacity duration-300" 
            [ngClass]="{'opacity-0': isMenuOpen()}"></span>
          <span class="w-6 h-0.5 bg-white transform transition-transform duration-300" 
            [ngClass]="{'-rotate-45 -translate-y-2': isMenuOpen()}"></span>
        </button>
      </nav>
      <div class="md:hidden fixed inset-0 top-20 transition-all duration-300 ease-in-out z-30"
           [ngClass]="{'opacity-0 pointer-events-none translate-x-full': !isMenuOpen(), 
                      'opacity-100 translate-x-0': isMenuOpen()}">
        <div class="mobile-menu-bg relative h-[calc(100vh-5rem)] overflow-y-auto">
          <div class="flex flex-col items-center justify-center min-h-full py-4 backdrop-blur-xl">
            <a href="/#about" 
               (click)="toggleMenu()"
               class="text-4xl text-white hover:text-orange-500 transition-colors font-semibold px-4 py-3 w-full text-center inline-flex items-center justify-center gap-3">
               <span class="material-symbols-outlined text-[32px] translate-y-[-3px]">info</span>
               About Us
            </a>
            <a href="/#games"
               (click)="toggleMenu()" 
               class="text-4xl text-white hover:text-orange-500 transition-colors font-semibold px-4 py-3 w-full text-center inline-flex items-center justify-center gap-3">
               <span class="material-symbols-outlined text-[32px] translate-y-[-3px]">sports_esports</span>
               Games
            </a>
            <a routerLink="/team"
               (click)="toggleMenu()" 
               class="text-4xl text-white hover:text-orange-500 transition-colors font-semibold px-4 py-3 w-full text-center inline-flex items-center justify-center gap-3">
               <span class="material-symbols-outlined text-[32px] translate-y-[-3px]">group</span>
               Team
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      font-family: 'League Spartan';
      background: rgba(13, 13, 13, 0.9);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
      backdrop-filter: blur(45px);
      box-shadow: 0px 4px 2.3px 0px rgba(0, 0, 0, 0.06);
      border-bottom: 0.75px solid rgba(88, 88, 88, 1)
    }

    .mobile-menu-bg {
      background: rgba(13, 13, 13, 0.75);
      background-image: 
        radial-gradient(
          circle at center,
          transparent 0%,
          rgba(0, 0, 0, 0.8) 100%
        )
    }
  `]
})
export class HeaderComponent implements OnDestroy {
  private menuOpen = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isMenuOpen() {
    return this.menuOpen();
  }

  private toggleBodyScroll(disable: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = disable ? 'hidden' : '';
    }
  }

  toggleMenu() {
    this.menuOpen.update(value => {
      const newValue = !value;
      this.toggleBodyScroll(newValue);
      return newValue;
    });
  }

  ngOnDestroy() {
    this.toggleBodyScroll(false);
  }
}