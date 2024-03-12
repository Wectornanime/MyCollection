import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionCalendarOutline,
  ionPeopleOutline,
  ionGameControllerOutline,
  ionChevronDownOutline,
  ionChevronUpOutline,
  ionChevronBackOutline
} from '@ng-icons/ionicons';

// myCompnents
import { InfoCardComponent } from '../../components/detailsPage/info-card/info-card.component';
import { CarouselComponent } from '../../components/detailsPage/carousel/carousel.component';

import { gameList } from '../../data/gamelist.data';
import { GameDetails } from '../../types/game.type';

@Component({
  selector: 'app-details.page',
  standalone: true,
  imports: [CommonModule, NgIconComponent, InfoCardComponent, CarouselComponent],
  providers: [
    provideIcons({
      ionCalendarOutline,
      ionPeopleOutline,
      ionGameControllerOutline,
      ionChevronDownOutline,
      ionChevronUpOutline,
      ionChevronBackOutline
    })
  ],
  templateUrl: './details.page.component.html',
  styleUrl: './details.page.component.scss'
})
export class DetailsPageComponent {
  private id!:number;
  game!:GameDetails;
  nPlayers!: string;

  constructor(private  route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!; // Convert string to number
    this.getDatas();
  }

  getDatas(): void {
    gameList.map((item) => {
      if (item.id === this.id) {
        this.game = item;
        this.nPlayers = (this.game.players > 1) ? (`${this.game.players} jogadores`) : (`${this.game.players} jogador`);
      };
    });
  };

}
