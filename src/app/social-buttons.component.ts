import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  template: `
    <div class="grid grid-cols-3 gap-2">
      @for (social of socialLinks; track social.name) {
        <a 
          [href]="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg transition-transform hover:scale-110">
          <div class="p-2 rounded-lg">
            <img 
              [src]="social.icon" 
              [alt]="social.name"
              class="w-5 h-5 object-contain"
              loading="lazy">
          </div>
        </a>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    a {
      transition: all 0.2s ease-in-out;
      padding: 0.05rem;
      background: linear-gradient(180deg, rgba(102, 102, 102, 0.45) 0%, rgba(102, 102, 102, 0) 100%);
    }

    a div {
      background: linear-gradient(180deg, #151515 0%, #1C1C1C 100%);
    }
    
    a:hover {
      filter: brightness(1.2);
    }
  `]
})
export class SocialButtonsComponent {
  readonly socialLinks: SocialLink[] = [
    {
      name: 'Discord',
      icon: 'socials/discord.svg',
      url: 'https://discord.gg/rbCJdZjewf'
    },
    {
      name: 'YouTube',
      icon: 'socials/youtube.svg',
      url: 'https://youtube.com/@sftsplt'
    },
    {
      name: 'Twitter',
      icon: 'socials/twitter.svg',
      url: 'https://x.com/Softsplit'
    },
    {
      name: 'Bluesky',
      icon: 'socials/bluesky.svg',
      url: 'https://bsky.app/profile/softsplit.org'
    },
    {
      name: 'GitHub',
      icon: 'socials/github.svg',
      url: 'https://github.com/Softsplit'
    },
    {
      name: 'S&box',
      icon: 'socials/sbox.svg',
      url: 'https://sbox.game/softsplit'
    }
  ];
}