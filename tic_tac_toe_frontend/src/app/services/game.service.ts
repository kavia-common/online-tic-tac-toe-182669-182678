import { Injectable, Signal, computed, signal } from '@angular/core';

export type Player = 'X' | 'O' | null;
export type Board = Player[];

/**
 * GameService manages Tic Tac Toe state via Angular signals.
 */
@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly _board = signal<Board>(Array(9).fill(null));
  private readonly _xIsNext = signal<boolean>(true);
  private readonly _winner = signal<Player>(null);
  private readonly _moves = signal<number>(0);

  readonly board: Signal<Board> = this._board.asReadonly();
  readonly xIsNext = this._xIsNext.asReadonly();
  readonly winner = this._winner.asReadonly();
  readonly isDraw = computed(() => this._moves() === 9 && this._winner() === null);
  readonly currentPlayer = computed<Player>(() => (this._xIsNext() ? 'X' : 'O'));

  // PUBLIC_INTERFACE
  reset(): void {
    this._board.set(Array(9).fill(null));
    this._xIsNext.set(true);
    this._winner.set(null);
    this._moves.set(0);
  }

  // PUBLIC_INTERFACE
  makeMove(index: number): void {
    if (this._winner() || this._board()[index] !== null) return;
    const next = this._xIsNext() ? 'X' : 'O';
    const newBoard = [...this._board()];
    newBoard[index] = next;
    this._board.set(newBoard);
    this._moves.set(this._moves() + 1);

    const w = this.calculateWinner(newBoard);
    if (w) {
      this._winner.set(w);
    } else {
      this._xIsNext.set(!this._xIsNext());
    }
  }

  private calculateWinner(squares: Board): Player {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6],         // diagonals
    ];
    for (const [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
