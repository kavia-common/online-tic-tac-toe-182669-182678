import { Component } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { ControlsComponent } from './components/controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent, StatusBarComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // PUBLIC_INTERFACE
  title = 'Tic Tac Toe';
}
