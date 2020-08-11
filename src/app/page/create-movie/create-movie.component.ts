import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../../model/movie-details';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieReviewService } from '../../service/movie-review.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {


  movieDetails: MovieDetails = new MovieDetails();
  error: boolean = false;
  submitted: boolean = false;
  isAdminUSer: boolean = false;
  constructor(private movieReviewService: MovieReviewService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(isNullOrUndefined(window.localStorage.getItem('user'))) {
      this.router.navigate(['../login'],{relativeTo: this.route});
    } else if(window.localStorage.getItem('user') === 'admin') {
      this.isAdminUSer = true;
    } else {
      this.isAdminUSer = false;
    }
  }
  
  onSubmit() {
  if(isNullOrUndefined(this.movieDetails.movieName)) {
      this.error = true;
    } else {
      this.error = false;
      this.movieDetails.userName= window.localStorage.getItem('user');
      this.movieReviewService.addMovieDetails(this.movieDetails).subscribe(response => {
        this.submitted = true;
        console.log(response);
      },
      error => {
        console.log(error);
      });
      this.goBackToList();
    }
  }

  goBackToList(): void {
    this.router.navigate(['./list'],{relativeTo: this.route}); 
  }

  newMovie(): void {
    this.submitted= false;
    this.movieDetails = new MovieDetails();
  }
}


