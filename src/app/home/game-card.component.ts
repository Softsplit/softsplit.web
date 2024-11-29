import { Component, Input } from '@angular/core';

interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  year: string;
}

@Component({
  selector: 'app-game-card',
  standalone: true,
  template: `
    <div class="bg-[#2a1f1a] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col h-full shadow-[0_4px_6px_-1px_rgba(254,131,16,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(254,131,16,0.2)]">
      <img [src]="game.imageUrl" [alt]="game.title" class="w-full h-48 object-cover">
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-[#fe8310] text-xl font-bold mb-2">{{game.title}}</h3>
        <p class="text-gray-300 mb-4">{{game.description}}</p>
        <div class="mt-auto flex justify-between items-center pt-4">
          <span class="text-gray-400">{{game.year}}</span>
          <a [href]="game.link" target="_blank" 
             class="px-4 py-2 bg-[#fe8310] text-white rounded-md hover:bg-[#ff9635] transition-colors inline-flex items-center gap-1">
            <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">play_arrow</span>
            Play now
          </a>
        </div>
      </div>
    </div>
  `
})
export class GameCardComponent {
  @Input({ required: true }) game!: Game;
}