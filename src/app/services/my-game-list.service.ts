import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetails } from '../types/game.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyGameListService {

  constructor(private http:HttpClient) { }

  public getGames(): Observable<GameDetails[]> {
    return this.http.get<GameDetails[]>(environment.gamesListUrl);
  }
}
