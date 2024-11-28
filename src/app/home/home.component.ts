import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section min-h-screen flex justify-center bg-cover bg-center relative">
      <canvas #particleCanvas class="absolute top-0 left-0 w-full h-full"></canvas>
      <div class="h-full w-full backdrop-blur-[1px] content-center relative">
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 md:px-8 min-h-screen pb-24 pt-48">
          <div class="text-white md:w-1/2 text-center md:text-left">
            <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in leading-tight">
              We're a team of passionate individuals making stuff in our spare time.
            </h1>
          </div>
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
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private isBrowser: boolean;
  private readonly PARTICLE_COUNT = 80;
  private lastWidth: number = 0; // Default value for SSR
  private lastHeight: number = 0; // Default value for SSR
  private resizeHandler: () => void;

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
  private readonly PARTICLE_COLOR = 'rgba(254, 131, 16, 0.6)'; // Match orange from background
  private readonly CONNECTION_COLOR = 'rgba(254, 131, 16, 0.2)';
  private readonly GLOW_COLOR = 'rgba(254, 131, 16, 0.3)';
  private readonly BASE_SPEED = 0.5;  // Controls overall movement speed
  
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