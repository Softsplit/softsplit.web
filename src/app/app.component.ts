import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TitleService } from './title.service';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private titleService: TitleService) {}
}
