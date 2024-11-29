import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  standalone: true,
  template: `
    <div class="flex flex-col items-center text-center py-5">
      <span class="text-[#fe8310] text-5xl font-bold mb-2">{{value}}</span>
      <span class="text-white text-lg">{{label}}</span>
    </div>
  `
})
export class StatisticCardComponent {
  @Input({ required: true }) value!: string;
  @Input({ required: true }) label!: string;
}