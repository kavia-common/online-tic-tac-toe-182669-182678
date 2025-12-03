import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Player } from '../../services/game.service';

@Component({
  selector: 'app-cell',
  standalone: true,
  template: `
    <button class="cell" (click)="onClick()" [disabled]="disabled || value !== null" aria-label="Board cell">
      {{ value || '' }}
    </button>
  `,
  styles: [`
    .cell {
      width: var(--cell-size, 96px);
      height: var(--cell-size, 96px);
      border-radius: 12px;
      background: var(--surface);
      color: var(--text);
      border: 2px solid var(--primary-200);
      font-size: 2.25rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 120ms ease, box-shadow 150ms ease, background-color 150ms ease, border-color 150ms ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .cell:hover:not(:disabled) {
      transform: translateY(-2px);
      border-color: var(--primary);
      box-shadow: 0 6px 12px rgba(37, 99, 235, 0.12);
      background: linear-gradient(180deg, rgba(37,99,235,0.06), rgba(249,250,251,1));
    }
    .cell:disabled {
      cursor: default;
      opacity: 0.9;
    }
  `]
})
export class CellComponent {
  @Input() value: Player = null;
  @Input() disabled = false;
  @Output() select = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled && this.value === null) {
      this.select.emit();
    }
  }
}
