import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './page/movies-list/movies-list.component';
import { MovieReviewComponent } from './page/movie-review/movie-review.component';
import { CreateMovieComponent } from './page/create-movie/create-movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LogoutPageComponent } from './page/logout-page/logout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieReviewComponent,
    CreateMovieComponent,
    LoginPageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
