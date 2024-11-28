import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  year: number;
}

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule],
  template: `
    <section class="hero-section flex bg-cover bg-center relative min-h-[68.5vh] justify-center">
      <canvas #particleCanvas class="absolute w-full h-full"></canvas>
      <div class="backdrop-blur-[1px] flex items-center justify-center w-full px-12 pt-20 pb-20 relative">
        <div class="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#332416] to-transparent"></div>
        <div class="text-white md:w-2/3 lg:w-1/2 text-justify tracking-tighter relative z-10">
          <h1 class="text-5xl lg:text-6xl font-bold animate-fade-in leading-tight drop-shadow-lg">
            <span class="text-white">We're a team of</span>
            <span class="text-[#fe8310]"> passionate individuals</span>
            <span class="text-white"> making stuff in our</span>
            <span class="text-[#fe8310]"> spare time.</span>
          </h1>
        </div>
      </div>
    </section>
    <section class="games-section flex py-20 px-4 relative justify-center">
      <div class="absolute inset-0 bg-gradient-to-b from-[#332416] to-[black]"></div>
      <div class="container mx-auto max-w-sm md:max-w-3xl relative z-10">
        <h2 class="text-4xl font-bold text-white mb-12 text-center md:text-left drop-shadow-lg">Our games.</h2>
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
                     class="px-4 py-2 bg-[#fe8310] text-white rounded-md hover:bg-[#ff9635] transition-colors">
                    Play Now
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      font-family: 'League Spartan';
      background-image: radial-gradient(circle, rgba(254,131,16,1) 0%, rgba(254,131,16,0.75) 0%, rgba(51,36,22,1) 100%), url('/hero_bg.jpg');
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }

    .games-section {
      font-family: 'League Spartan';
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
      year: 2024
    },
    {
      id: 2,
      title: "Sandbox Classic",
      description: "An open-source, community-developed port of the original Sandbox for the scene system.",
      imageUrl: "/games/sandboxclassic.png",
      link: "https://sbox.game/softsplit/sandbox",
      year: 2024
    }
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