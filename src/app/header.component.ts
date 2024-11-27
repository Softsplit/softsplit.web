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
      font-family: "League Spartan";
      background: rgba(13, 13, 13, 0.9);
      backdrop-filter: blur(45);
      box-shadow: 0px 4px 2.3px 0px rgba(0, 0, 0, 0.06);
      border-bottom: 0.75px solid rgba(88, 88, 88, 1)
    }
  `
})
export class HeaderComponent { }