import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://katanime.vercel.app/api';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/getrandom");
  }

  getAnime(animeName: string): Observable<any> {
    return this.http.get<any>("https://api.jikan.moe/v4/anime?q=" + animeName);
  }

}
