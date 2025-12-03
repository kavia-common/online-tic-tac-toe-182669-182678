import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import type { Player } from '../../services/game.service';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  template: `
    <button
      class="cell"
      (click)="onClick()"
      [disabled]="disabled || value !== null"
      [attr.aria-label]="ariaLabel"
      [attr.title]="titleText"
    >
      <ng-container [ngSwitch]="value">
        <svg *ngSwitchCase="'X'" class="icon" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
          <!-- Knight icon (inline SVG) -->
          <path class="icon-fill"
            d="M6 19h11v-2.5a4.5 4.5 0 0 0-4.5-4.5H11l1.2-2.2c.2-.36.3-.77.3-1.18 0-1.32-1.07-2.4-2.4-2.4H8.5c-.28 0-.5.22-.5.5 0 .83.67 1.5 1.5 1.5h.5l-2 3.5c-.21.36-.32.77-.32 1.18V14H6c-1.66 0-3 1.34-3 3V19h3Zm0 2c-1.1 0-2-.9-2-2H3a1 1 0 0 1-1-1v-1c0-2.21 1.79-4 4-4h1.18c.1-.35.25-.68.45-1l1.54-2.7A2.994 2.994 0 0 1 8 7.5c0-1.38 1.12-2.5 2.5-2.5h1.9c2.1 0 3.8 1.7 3.8 3.8 0 .56-.12 1.11-.35 1.62l-.81 1.8A5.5 5.5 0 0 1 19 16.5V21c0 .55-.45 1-1 1H6Z"/>
        </svg>

        <svg *ngSwitchCase="'O'" class="icon" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
          <!-- Queen icon (inline SVG) -->
          <path class="icon-fill"
            d="M7 21h10a1 1 0 0 0 1-1c0-1.66-1.34-3-3-3h-.28l1.74-4.02 2.04 1.53c.17.13.38.2.6.2.55 0 1-.45 1-1 0-.36-.2-.7-.52-.88L18.5 11l1.26-2.52c.15-.3.24-.64.24-.98 0-1.1-.9-2-2-2-1 0-1.82.74-1.97 1.7L15 8l-1.5-3h-3L9 8 8 7.2C7.82 6.48 7.08 6 6.3 6 5.03 6 4 7.03 4 8.3c0 .34.08.68.24.98L5.5 11l-1.82 1.83c-.32.18-.52.52-.52.88 0 .55.45 1 1 1 .22 0 .43-.07.6-.2L6.8 13l1.73 4H8.5c-1.66 0-3 1.34-3 3 0 .55.45 1 1 1Zm3.65-6.5-.9-2.1L10.5 9l1.5 1.5L13.5 9l.75 3.4-.9 2.1h-2.7Z"/>
        </svg>

        <span *ngSwitchDefault class="placeholder" aria-hidden="true"></span>
      </ng-container>
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 120ms ease, box-shadow 150ms ease, background-color 150ms ease, border-color 150ms ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      padding: 0;
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
    .icon {
      width: 70%;
      height: 70%;
      display: block;
    }
    .icon .icon-fill {
      fill: currentColor;
    }
    .placeholder {
      width: 70%;
      height: 70%;
      display: block;
    }
  `]
})
export class CellComponent {
  @Input() value: Player = null;
  @Input() disabled = false;
  @Output() select = new EventEmitter<void>();

  get ariaLabel(): string {
    if (this.value === 'X') return 'Knight';
    if (this.value === 'O') return 'Queen';
    return 'Empty cell';
    }
  get titleText(): string {
    if (this.value === 'X') return 'Knight';
    if (this.value === 'O') return 'Queen';
    return 'Empty cell';
  }

  onClick(): void {
    if (!this.disabled && this.value === null) {
      this.select.emit();
    }
  }
}
