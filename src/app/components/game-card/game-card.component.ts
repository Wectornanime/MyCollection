import { Component, Input } from '@angular/core';
import { GameDetails } from '../../types/game.type';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() gameAssets!:GameDetails;

}
