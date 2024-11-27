import { Component } from '@angular/core';
import { SocialLink } from './models/social-link.model';

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
          [attr.aria-label]="social.ariaLabel"
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
      url: 'https://discord.gg/rbCJdZjewf',
      ariaLabel: 'Join our Discord server'
    },
    {
      name: 'YouTube',
      icon: 'socials/youtube.svg',
      url: 'https://youtube.com/@sftsplt',
      ariaLabel: 'Visit our YouTube channel'
    },
    {
      name: 'Twitter',
      icon: 'socials/twitter.svg',
      url: 'https://x.com/Softsplit',
      ariaLabel: 'Follow us on Twitter'
    },
    {
      name: 'Bluesky',
      icon: 'socials/bluesky.svg',
      url: 'https://bsky.app/profile/softsplit.org',
      ariaLabel: 'Follow us on Bluesky'
    },
    {
      name: 'GitHub',
      icon: 'socials/github.svg',
      url: 'https://github.com/Softsplit',
      ariaLabel: 'View our GitHub profile'
    },
    {
      name: 'S&box',
      icon: 'socials/sbox.svg',
      url: 'https://sbox.game/softsplit',
      ariaLabel: 'Visit our S&box profile'
    }
  ];
}