import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface sg {
  id: number;
  name: string;
  types: string[];
  verified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SteamGridDbService {
  private urlSteamGrid: string = 'https://www.steamgriddb.com/api/v2';

  constructor(private http: HttpClient) { };

  public getDatasByGame(term: string) {
    const url = `${this.urlSteamGrid}/search/autocomplete/${term}`;

    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer 22b08daac9f56fcee94268e225dd3e05');

    this.http.get(url, {headers: headers}).subscribe(
      (data) => console.log(data)
    );
  };
};
