import { Component, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/model/movie-details';
import { MovieReviewDetails } from 'src/app/model/movie-review-details';
import { MovieReviewService } from 'src/app/service/movie-review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNumber, isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

  movieDetails: MovieDetails;
  movieReviewDetails: MovieReviewDetails= new MovieReviewDetails();
  movieReviewDetailsList: Observable<MovieReviewDetails[]>; 
  movieId: number;
  movieName: string;
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
    let id = this.route.snapshot.queryParamMap.get('movieId');
    this.movieName = this.route.snapshot.queryParamMap.get('movieName');
    if(isNumber(parseInt(id))) {
      this.movieId = parseInt(id);
      } else {
        throw console.error("movieId is not an number");
      }

    this.movieReviewDetailsList = this.movieReviewService.getAllMovieReviewsByMovieId(this.movieId);
  }

  onSubmit() {
    if(isNullOrUndefined(this.movieReviewDetails.movieReview)) {
      this.error = true;
    } else {
    this.error = false;
    this.movieReviewDetails.movieId = this.movieId;
    this.movieReviewDetails.userName = window.localStorage.getItem('user');
    this.movieReviewService.addMovieReviewDetails(this.movieReviewDetails).subscribe(res=> {
      console.log(res);
      this.submitted= true;
    },
    error => {
      console.log(error);
    });
    this.goBackToList();
    }
  }

  goBackToList(): void {
    this.router.navigate(['../list'],{relativeTo: this.route}); 
  }

}
