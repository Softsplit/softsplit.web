import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialButtonsComponent } from './social-buttons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialButtonsComponent],
  template: `
    <footer class="text-white text-lg content-center min-h-[18rem] flex flex-wrap basis-full">
      <div class="absolute w-full h-px fake-border"></div>
      <div class="container mx-auto py-12 px-6 flex flex-col lg:flex-row justify-evenly gap-12 items-center">
        <div class="w-fit flex flex-col md:items-start order-2 lg:order-none">
          <img src="logo.png" alt="Logo" class="mb-4 w-32 h-auto object-contain">
          <p class="opacity-25">Softsplit &copy; 2024</p>
        </div>
        <div class="w-full md:w-1/2 flex flex-col lg:flex-row justify-between gap-8 order-1 md:order-none">
          <div class="flex flex-col items-center gap-2">
            <h3 class="font-bold opacity-50">Studio</h3>
            <ul class="text-center space-y-1">
              <li><a routerLink="/games">Games</a></li>
              <li><a routerLink="/team">Team</a></li>
              <li><a routerLink="/legal">Legal</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h3 class="font-bold opacity-50">Games</h3>
            <ul class="text-center space-y-1">
              <li><a href="#">Sandbox Classic</a></li>
              <li><a href="#">S&box Donut</a></li>
            </ul>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h3 class="font-bold opacity-50">Socials</h3>
            <app-social-buttons />
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer {
      font-family: 'League Spartan';
      background: rgba(14, 14, 14, 1);
      width: 100%;
      margin-top: auto;
      
      .fake-border {
        background: radial-gradient(circle, #FFFFFF 0%, rgba(153, 153, 153, 0.25) 100%);
      }
    }
  `
})
export class FooterComponent { }