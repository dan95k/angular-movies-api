import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() movieData: any = {};
  @Input() isFetching: boolean = false;
  panelOpenState: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
