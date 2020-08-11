import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../../model/movie-details';
import { Observable } from 'rxjs';
import { MovieReviewService } from '../../service/movie-review.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movieDetails: Observable<MovieDetails[]>;
  isAdminUSer: boolean = false;

  constructor(private movieReviewService: MovieReviewService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if(isNullOrUndefined(window.localStorage.getItem('user'))) {
      this.router.navigate(['../login'],{relativeTo: this.route});
    } else if(window.localStorage.getItem('user') === 'admin') {
      this.isAdminUSer = true;
    } else {
      this.isAdminUSer = false;
    }
    this.movieDetails = this.movieReviewService.getAllMovies();
  }

  reviewMovie(movieId: number, movieName: string) {
    const queryParams = {movieId, movieName};
   this.router.navigate(['../review'],{queryParams, relativeTo: this.route}); 
  }
}
