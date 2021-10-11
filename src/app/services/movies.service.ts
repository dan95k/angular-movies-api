import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //TODO: move api key to env variables
  private apiUrl: string = `http://www.omdbapi.com/?apikey=${environment.API_KEY}`;
  constructor(private http: HttpClient) {}
  getMovieData(movieName: string): Observable<string> {
    let query = `${this.apiUrl}&t=${movieName}`;
    return this.http.get<string>(query);
  }
}
