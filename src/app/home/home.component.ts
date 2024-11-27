import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <!-- Text Content -->
          <div class="text-white md:w-1/2 text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              GO FUCK YOURSELF
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-200">
              Discover amazing content and features
            </p>
            <button class="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold 
                         hover:bg-indigo-100 transition duration-300">
              Get Started
            </button>
          </div>
          <!-- Image -->
          <div class="md:w-1/2">
            <img 
              src="https://placecats.com/600/400" 
              alt="Hero Cat" 
              class="rounded-lg shadow-2xl hover:scale-105 transition duration-300"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
  `]
})
export class HomeComponent {}