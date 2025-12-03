import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CellComponent } from '../cell/cell.component';
import { GameService, Player } from '../../services/game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, CellComponent],
  template: `
    <div class="board" role="grid" aria-label="Tic Tac Toe board">
      <app-cell
        *ngFor="let v of game.board(); let i = index"
        [value]="v"
        [disabled]="!!game.winner()"
        (select)="move(i)">
      </app-cell>
    </div>
  `,
  styles: [`
    .board {
      display: grid;
      grid-template-columns: repeat(3, var(--cell-size, 96px));
      gap: 14px;
      padding: 18px;
      background: var(--surface);
      border-radius: 16px;
      box-shadow: 0 12px 28px rgba(0,0,0,0.08);
      border: 1px solid var(--primary-100);
    }
  `]
})
export class BoardComponent {
  constructor(public game: GameService) {}

  move(index: number): void {
    this.game.makeMove(index);
  }
}
