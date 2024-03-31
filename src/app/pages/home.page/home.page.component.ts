import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSearchOutline, ionAddOutline } from '@ng-icons/ionicons';
import { RouterLink } from '@angular/router';

//components
import { GameCardComponent } from '../../components/home/game-card/game-card.component';

//others
import { gameList } from '../../data/gamelist.data';
import { GameDetails } from '../../types/game.type';

@Component({
  selector: 'app-home.page',
  standalone: true,
  imports: [CommonModule, GameCardComponent, NgIconComponent, FormsModule, RouterLink],
  providers: [provideIcons({ionSearchOutline, ionAddOutline})],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  private gameList!: GameDetails[];
  showGameList!: GameDetails[];
  searchInput!: string;

  ngOnInit(): void {
    this.getDatas();
  }

  getDatas(): void {
    const list = gameList;

    this.gameList = list;
    this.filterData();
  };

  filterData(): void {
    if (this.searchInput) {
      this.showGameList = [];

      this.gameList.map(game => {
        if (game.name.toLocaleLowerCase().search(this.searchInput.replace(/\s/g, '').toLowerCase()) >= 0 ) {
          this.showGameList.push(game);
        };
      });

    } else {
      this.showGameList = this.gameList;
    };
  };

}
