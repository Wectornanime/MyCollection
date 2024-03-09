import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { GameCardComponent } from '../../components/game-card/game-card.component';

//others
import { gameList } from '../../data/gamelist.data';
import { GameDetails } from '../../types/game.type';

@Component({
  selector: 'app-home.page',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  gl:GameDetails[] = gameList;

}
