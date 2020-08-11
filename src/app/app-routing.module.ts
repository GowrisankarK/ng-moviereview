import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './page/movies-list/movies-list.component';
import { MovieReviewComponent } from './page/movie-review/movie-review.component';
import {CreateMovieComponent } from './page/create-movie/create-movie.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LogoutPageComponent } from './page/logout-page/logout-page.component';

const routes: Routes = [
  {
    path: 'movies/list',
    component: MoviesListComponent
  },
  {
    path: 'movies/review',
    component: MovieReviewComponent
  },
  {
    path: 'movies/create',
    component: CreateMovieComponent
  },
  {
    path: 'movies/login',
    component: LoginPageComponent
  },
  {
    path: 'movies/logout',
    component: LogoutPageComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
