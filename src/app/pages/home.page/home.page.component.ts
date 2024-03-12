import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSearchOutline } from '@ng-icons/ionicons'

//components
import { GameCardComponent } from '../../components/game-card/game-card.component';

//others
import { gameList } from '../../data/gamelist.data';
import { GameDetails } from '../../types/game.type';

@Component({
  selector: 'app-home.page',
  standalone: true,
  imports: [CommonModule, GameCardComponent, NgIconComponent, FormsModule],
  providers: [provideIcons({ionSearchOutline})],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  gameList!:GameDetails[];
  searchInput!: string;

  ngOnInit(): void {
    this.gameList = this.getDatas();
  }

  getDatas():GameDetails[] {
    return gameList;
  };

}
