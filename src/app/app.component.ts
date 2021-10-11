import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-app';
  movieData: any = '';
  isFetching: boolean = false;
  constructor(private moviesService: MoviesService) {}

  onSearchMovie(req: string) {
    this.isFetching = true;
    this.movieData = ''; //
    this.moviesService.getMovieData(req).subscribe(
      (res: any) => {
        this.isFetching = false;
        if (res.Response === 'False') {
          alert('Invalid Input');
          this.movieData = '';
        } else {
          this.movieData = res;
        }
      },
      () => {
        this.isFetching = false;
        alert('Communication Error!');
      }
    );
  }
}
