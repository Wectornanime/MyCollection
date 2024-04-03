import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobyGamesApiService {

  private url_base: string = 'https://api.mobygames.com/v1/games';
  private api_key: string = 'moby_iAAI2vqHuifgtzZ1eyVTQ41ofWG';

  constructor(private http:HttpClient) { }


  public getDatasByGame(title: string) {
    const url = `/api?api_key=${this.api_key}&title=${title}`;

    this.http.get(url).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
}
