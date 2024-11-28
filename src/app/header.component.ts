import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <header class="w-full text-white fixed z-50">
      <nav class="container mx-auto p-4 flex justify-between items-center h-20 relative z-50">
        <a routerLink="/">
          <img src="header_logo.png" class="w-fit h-12" alt="Header Logo" />
        </a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-4">
          <a routerLink="/about" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg">About Us</a>
          <a routerLink="/games" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg">Games</a>
          <a routerLink="/team" class="text-white hover:text-orange-500 transition-colors font-semibold py-2 px-4 text-lg">Team</a>
        </div>

        <!-- Mobile Hamburger -->
        <button 
          class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-50"
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

      <!-- Mobile Menu Overlay -->
      <div class="md:hidden fixed h-screen top-20 bottom-0 left-0 right-0 backdrop-blur-xl bg-black/80 transform transition-all duration-300 ease-in-out flex items-center content-center justify-center z-40 pb-44"
           [ngClass]="{'translate-x-0 opacity-100': isMenuOpen(), 'translate-x-full opacity-0': !isMenuOpen()}">
        <div class="flex flex-col items-center justify-center space-y-12 w-full">
          <a routerLink="/about" class="text-white font-semibold text-3xl hover:text-orange-500 transition-colors" (click)="toggleMenu()">About Us</a>
          <a routerLink="/games" class="text-white font-semibold text-3xl hover:text-orange-500 transition-colors" (click)="toggleMenu()">Games</a>
          <a routerLink="/team" class="text-white font-semibold text-3xl hover:text-orange-500 transition-colors" (click)="toggleMenu()">Team</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      font-family: 'League Spartan';
      background: rgba(13, 13, 13, 1);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
      backdrop-filter: blur(45px);
      box-shadow: 0px 4px 2.3px 0px rgba(0, 0, 0, 0.06);
      border-bottom: 0.75px solid rgba(88, 88, 88, 1)
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}