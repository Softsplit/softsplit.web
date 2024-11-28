import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="w-full text-white fixed z-50">
      <nav class="container mx-auto p-4 flex justify-between items-center h-20">
        <a routerLink="/">
          <img src="header_logo.png" class="w-fit h-12" alt="Header Logo" />
        </a>
        <div class="space-x-4 text-sm">
          <a routerLink="/about" class="text-white font-semibold py-2 px-4 text-lg">About Us</a>
          <a routerLink="/games" class="text-white font-semibold py-2 px-4 text-lg">Games</a>
          <a routerLink="/team" class="text-white font-semibold py-2 px-4 text-lg">Team</a>
        </div>
      </nav>
    </header>
  `,
  styles: `
    header {
      font-family: 'League Spartan';
      background: rgba(13, 13, 13, 0.9);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
      backdrop-filter: blur(45px);
      box-shadow: 0px 4px 2.3px 0px rgba(0, 0, 0, 0.06);
      border-bottom: 0.75px solid rgba(88, 88, 88, 1)
    }
  `
})
export class HeaderComponent { }