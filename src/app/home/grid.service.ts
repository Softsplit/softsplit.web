import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  drawGrid(canvas: HTMLCanvasElement) {
    if (!isPlatformBrowser(this.platformId)) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(254, 131, 16, 0.1)';
      ctx.lineWidth = 1;

      const cellSize = 50;
      const cols = Math.floor(canvas.width / cellSize);
      const rows = Math.floor(canvas.height / cellSize);

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
      }

      for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();
  }
}