import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    // Update titles on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  private updateTitle() {
    const baseTitle = 'Softsplit';
    let newTitle = baseTitle;

    // Set title based on route
    switch (this.router.url) {
      case '/team':
        newTitle = `Team | ${baseTitle}`;
        break;
      // Add more routes as needed
    }

    // Update all title tags
    this.title.setTitle(newTitle);
    this.meta.updateTag({ property: 'og:title', content: newTitle });
    this.meta.updateTag({ property: 'twitter:title', content: newTitle });
  }
}