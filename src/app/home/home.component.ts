import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SocialButtonsComponent } from "../social-buttons.component";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  year: string;
}

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, SocialButtonsComponent],
  template: `
    <section class="hero-section flex bg-cover bg-center relative min-h-screen justify-center">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/hero_bg.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-gradient hero-gradient"></div>
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
    <section id="games" class="games-section flex bg-cover bg-center py-20 px-4 relative justify-center">
      <div class="absolute h-[100%] inset-0 bg-gradient-to-b from-[#332416] to-transparent"></div>
      <div class="container max-w-sm md:max-w-3xl relative z-10">
        <h2 class="text-4xl font-bold text-white mb-12 text-center md:text-left drop-shadow-lg">Our games :)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (game of games; track game.id) {
            <div class="game-card bg-[#2a1f1a] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
              <img [src]="game.imageUrl" [alt]="game.title" class="w-full h-48 object-cover">
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-[#fe8310] text-xl font-bold mb-2">{{game.title}}</h3>
                <p class="text-gray-300 mb-4">{{game.description}}</p>
                <div class="mt-auto flex justify-between items-center">
                  <span class="text-gray-400">{{game.year}}</span>
                  <a [href]="game.link" target="_blank" 
                    class="px-4 py-2 bg-[#fe8310] text-white rounded-md hover:bg-[#ff9635] transition-colors inline-flex items-center gap-1">
                    <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">play_arrow</span>
                    Play now
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
    <section class="achievements-section flex bg-cover bg-center py-16 relative justify-center">
      <div class="absolute inset-0 bg-gradient-to-b from-[#332416] to-transparent"></div>
      <div class="container max-w-5xl relative z-10 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (stat of statistics; track stat.label) {
            <div class="flex flex-col items-center text-center py-5">
              <span class="text-[#fe8310] text-5xl font-bold mb-2">{{stat.value}}</span>
              <span class="text-white text-lg">{{stat.label}}</span>
            </div>
          }
        </div>
      </div>
    </section>
    <section id="about" class="about-section flex bg-cover bg-center py-20 relative justify-center">
      <div class="absolute inset-0 bg-gradient-to-b from-[#1f1a16] to-[black]"></div>
      <div class="container max-w-5xl relative z-10 px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-6">About Us</h2>
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
    .hero-section {
      font-family: 'League Spartan';
    }

    .hero-gradient {
      background: radial-gradient(circle, rgba(254,131,16,1) 0%, rgba(254,131,16,0.75) 0%, rgba(51,36,22,1) 100%);
      z-index: -5;
    }

    .games-section {
      font-family: 'League Spartan';
      background-image: radial-gradient(circle, rgba(102,102,102,1) 0%, rgba(102,102,102,0.75) 0%, rgba(51,36,22,1) 100%), url('/games_bg.png');
    }
    
    .game-card {
      box-shadow: 0 4px 6px -1px rgba(254, 131, 16, 0.1);
      display: flex;
      flex-direction: column;
      height: 100%; 
    }
    
    .game-card:hover {
      box-shadow: 0 20px 25px -5px rgba(254, 131, 16, 0.2);
    }

    .game-card-content {
      flex: 1;  
    }

    .game-card-footer {
      margin-top: auto; 
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
    }

    .achievements-section {
      font-family: 'League Spartan';
      background: #1f1a16;
    }

    .about-section {
      font-family: 'League Spartan';
      background: #1f1a16;
      
      p {
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      img {
        transform: perspective(1000px) rotateY(-15deg);
        transition: transform 0.5s ease;
        
        &:hover {
          transform: perspective(1000px) rotateY(-5deg);
        }
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private isBrowser: boolean;
  private readonly PARTICLE_COUNT = 80;
  private lastWidth: number = 0; 
  private lastHeight: number = 0; 
  private resizeHandler: () => void;

  public games: Game[] = [
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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.resizeHandler = this.handleResize.bind(this);

    if (this.isBrowser) {
      this.lastWidth = window.innerWidth;
      this.lastHeight = window.innerHeight;
    }
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    // Adjust particle count based on screen width
    const particleCount = window.innerWidth < 768 ? 40 : this.PARTICLE_COUNT;

    this.particles = Array(particleCount).fill(null).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2 + 1
    }));
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeHandler);
    this.animate();
  }

  private handleResize() {
    if (!this.isBrowser) return;

    const canvas = this.canvasRef.nativeElement;
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    const scaleX = newWidth / this.lastWidth;
    const scaleY = newHeight / this.lastHeight;

    this.particles.forEach(particle => {
      particle.x *= scaleX;
      particle.y *= scaleY;
    });

    canvas.width = newWidth;
    canvas.height = newHeight;

    this.lastWidth = newWidth;
    this.lastHeight = newHeight;
  }

  private resizeCanvas() {
    if (!this.isBrowser) return;

    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private readonly NODE_DISTANCE = 100;
  private readonly PARTICLE_COLOR = 'rgba(254, 131, 16, 0.6)'; 
  private readonly CONNECTION_COLOR = 'rgba(254, 131, 16, 0.2)';
  private readonly GLOW_COLOR = 'rgba(254, 131, 16, 0.3)';
  private readonly BASE_SPEED = 0.5;  

  private animate() {
    if (!this.isBrowser || !this.ctx) return;

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update particle positions
    this.particles.forEach(particle => {
      // Update positions
      particle.x += particle.vx * this.BASE_SPEED;
      particle.y += particle.vy * this.BASE_SPEED;

      // Wrap around edges
      if (particle.x < 0) particle.x = window.innerWidth;
      if (particle.x > window.innerWidth) particle.x = 0;
      if (particle.y < 0) particle.y = window.innerHeight;
      if (particle.y > window.innerHeight) particle.y = 0;
    });

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      for (let j = i + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = other.x - particle.x;
        const dy = other.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.NODE_DISTANCE) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.strokeStyle = this.CONNECTION_COLOR;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      // Add glow effect
      this.ctx.shadowColor = this.GLOW_COLOR;
      this.ctx.shadowBlur = 15;

      this.ctx.fillStyle = this.PARTICLE_COLOR;
      this.ctx.fill();

      // Reset shadow
      this.ctx.shadowBlur = 0;
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}