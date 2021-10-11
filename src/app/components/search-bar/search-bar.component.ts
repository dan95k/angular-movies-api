import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onMovieSearch: EventEmitter<any> = new EventEmitter();
  movieName: string = '';
  isFullPlot: boolean = false;
  subscription?: Subscription;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.movieName) {
      alert('Insert Movie Name!');
      return;
    }
    const req = this.movieName;
    this.onMovieSearch.emit(req);
    this.movieName = '';
  }
}
