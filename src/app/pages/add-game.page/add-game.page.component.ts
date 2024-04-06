import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Plataform } from '../../types/mobyGames.type';
import { plataformList } from '../../data/plataformList.data';

@Component({
  selector: 'app-add-game.page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-game.page.component.html',
  styleUrl: './add-game.page.component.scss',
  providers: []
})
export class AddGamePageComponent {

  plID!: number;

  plataformList:Plataform = plataformList;

  gameName!: string;

  constructor(){}

}
