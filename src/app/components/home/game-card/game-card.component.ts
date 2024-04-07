import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GameDetails } from '../../../types/game.type';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() gameAssets!:GameDetails;
  detailsUrl!: string;

  ngOnChanges() {
    this.detailsUrl = '/details/'+this.gameAssets.id;
  }

}
