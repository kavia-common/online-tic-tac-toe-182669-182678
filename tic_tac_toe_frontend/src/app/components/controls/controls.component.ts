import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-controls',
  standalone: true,
  template: `
    <div class="controls">
      <button class="btn" (click)="reset()" aria-label="Reset game">Reset</button>
    </div>
  `,
  styles: [`
    .controls {
      margin-top: 16px;
      display: flex;
      justify-content: center;
    }
    .btn {
      padding: 10px 18px;
      border-radius: 10px;
      background: var(--primary);
      color: #fff;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: transform 120ms ease, box-shadow 150ms ease, background-color 150ms ease;
      box-shadow: 0 6px 14px rgba(37,99,235,0.25);
    }
    .btn:hover {
      transform: translateY(-1px);
      background: #1e4fd1;
      box-shadow: 0 10px 18px rgba(37,99,235,0.30);
    }
    .btn:active {
      transform: translateY(0);
    }
  `]
})
export class ControlsComponent {
  constructor(private game: GameService) {}

  // PUBLIC_INTERFACE
  reset(): void {
    this.game.reset();
  }
}
