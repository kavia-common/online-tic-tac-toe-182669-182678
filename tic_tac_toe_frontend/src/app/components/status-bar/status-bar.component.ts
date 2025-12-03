import { Component, computed } from '@angular/core';
import { NgIf } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="status">
      <span *ngIf="!game.winner() && !game.isDraw(); else endBlock">
        Turn: <strong>{{ game.currentPlayer() }}</strong>
      </span>
      <ng-template #endBlock>
        <span *ngIf="game.winner(); else drawBlock" class="winner">
          Winner: <strong>{{ game.winner() }}</strong>
        </span>
        <ng-template #drawBlock>
          <span class="draw">It's a draw!</span>
        </ng-template>
      </ng-template>
    </div>
  `,
  styles: [`
    .status {
      margin-top: 18px;
      padding: 12px 16px;
      background: var(--surface);
      color: var(--text);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--primary-100);
      text-align: center;
      font-size: 1.05rem;
    }
    .winner { color: var(--secondary); }
    .draw { color: var(--error); }
  `]
})
export class StatusBarComponent {
  constructor(public game: GameService) {}
}
