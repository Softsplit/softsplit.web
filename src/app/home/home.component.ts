import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section h-screen flex items-center justify-center bg-cover">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
          <!-- Text Content -->
          <div class="text-white md:w-1/2 text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              We're a team of passionate developers making stuff in our spare time.
            </h1>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background-image: url('/hero_bg.jpg');
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
  `]
})
export class HomeComponent { }