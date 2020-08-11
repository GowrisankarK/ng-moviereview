import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from '../model/movie-details';
import { MovieReviewDetails } from '../model/movie-review-details';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

baseUrl: string ="/api/moviewreview/v1";

constructor(private httpClient: HttpClient) { }

getAllMovies(): Observable<MovieDetails[]>  {
  return this.httpClient.get<MovieDetails[]>(this.baseUrl + "/getAllMovieList");
}

addMovieDetails(movieDetails: MovieDetails) : Observable<MovieDetails> {
  return this.httpClient.post<MovieDetails>(this.baseUrl + "/insert/movie", movieDetails);
}

getAllMovieReviewsByMovieId(movieId: number): Observable<MovieReviewDetails[]> {
  return this.httpClient.get<MovieReviewDetails[]>(this.baseUrl + "/movies/" + movieId);
}

addMovieReviewDetails(MovieReviewDetails: MovieReviewDetails) : Observable<MovieReviewDetails> {
  return this.httpClient.post<MovieReviewDetails>(this.baseUrl + "/insert/moviereview", MovieReviewDetails);
}
}
