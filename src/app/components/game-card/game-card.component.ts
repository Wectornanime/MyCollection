import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() gameDetailsUrl!: string;
  @Input() gameCoverUrl!: string;
  @Input() gameCoverAlt!: string;

}
