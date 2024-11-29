import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameCardComponent } from './game-card.component';
import { StatisticCardComponent } from './statistic-card.component';
import { SocialButtonsComponent } from '../shared/social-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GameCardComponent,
    StatisticCardComponent,
    SocialButtonsComponent
  ],
  template: `
    <section class="hero-section font-['League_Spartan'] flex bg-cover bg-center relative min-h-screen justify-center">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/hero_bg.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 hero-gradient -z-5"></div>
      <canvas #particleCanvas class="absolute w-full h-full"></canvas>
      <div class="backdrop-blur-[1px] flex flex-col items-center justify-center w-full px-12 pt-[10rem] pb-20 relative">
      <div class="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#332416] to-transparent"></div>
        <div class="text-white w-full md:w-2/3 lg:w-1/2 flex flex-col items-center relative z-10">
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-center">
            <span class="text-white">We're</span>
            <span class="text-[#fe8310]"> building</span>
            <span class="text-white"> exciting new experiences in our</span>
            <span class="text-[#fe8310]"> spare time.</span>
          </h1>
        </div>
        <app-social-buttons class="hero-social-buttons mt-8 relative z-10" />
      </div>
    </section>
    <section id="games" class="games-section font-['League_Spartan'] flex bg-cover bg-center py-20 px-4 relative justify-center">
      <div class="absolute h-[100%] inset-0 bg-gradient-to-b from-[#332416] to-transparent"></div>
      <div class="container max-w-sm md:max-w-3xl relative z-10">
        <h2 class="text-4xl font-bold text-white mb-12 text-center md:text-left drop-shadow-lg">Our games :)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (game of games; track game.id) {
            <app-game-card [game]="game" />
          }
        </div>
      </div>
    </section>
    <section class="font-['League_Spartan'] flex bg-cover bg-center py-16 relative justify-center bg-[#1f1a16]">
      <div class="container max-w-5xl relative z-10 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (stat of statistics; track stat.label) {
            <app-statistic-card [value]="stat.value" [label]="stat.label" />
          }
        </div>
      </div>
    </section>
    <section id="about" class="about-section font-['League_Spartan'] flex bg-cover bg-center py-20 relative justify-center">
      <div class="absolute inset-0 bg-gradient-to-b from-[#1f1a16] to-[black]"></div>
      <div class="container max-w-5xl relative z-10 px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-2">About Us</h2>
          <div class="w-24 h-1 bg-[#fe8310] mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="text-white space-y-6">
            <p class="text-lg leading-relaxed px-4">
              We're a passionate team of developers and creators who love building unique gaming experiences. Working from all corners of the globe, we collaborate in our spare time to bring innovative ideas to life.
            </p>
            <p class="text-lg leading-relaxed px-4">
              Our focus is on creating engaging, community-driven games that push creative boundaries while maintaining a fun and inclusive environment for players.
            </p>
          </div>
          <div class="relative mx-4">
            <div class="absolute inset-0 bg-gradient-to-r from-[#fe8310]/20 to-transparent rounded-lg"></div>
            <img src="/about_img.png" alt="Team Collaboration" class="w-full h-auto rounded-lg shadow-xl py-8" loading="lazy">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-gradient {
      background: radial-gradient(circle, rgba(254,131,16,1) 0%, rgba(254,131,16,0.75) 0%, rgba(51,36,22,1) 100%);
    }

    .games-section {
      background-image: radial-gradient(circle, rgba(102,102,102,1) 0%, rgba(102,102,102,0.75) 0%, rgba(51,36,22,1) 75%), url('/games_bg.png');
    }
  `]
})
export class HomeComponent {
  readonly games = [
    {
      id: 1,
      title: "S&box Donut",
      description: "Immerse yourself in the tantalizing thrill of staring at (or munching on) a spinning ASCII torus, as you ponder life's deepest questions.",
      imageUrl: "/games/sboxdonut.png",
      link: "https://sbox.game/softsplit/donut",
      year: "February 2024"
    },
    {
      id: 2,
      title: "Sandbox Classic",
      description: "An open-source, community-developed port of the original Sandbox for the scene system.",
      imageUrl: "/games/sandboxclassic.png",
      link: "https://sbox.game/softsplit/sandbox",
      year: "April 2024"
    }
  ];

  readonly statistics = [
    { value: '2+', label: 'Games Released' },
    { value: '400+', label: 'Discord Members' },
    { value: '50K+', label: 'Unique Players' },
    { value: '0', label: 'Legal Incidents' }
  ];
}