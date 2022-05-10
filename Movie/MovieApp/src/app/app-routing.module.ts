import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { ReviewComponent } from './components/review/review.component';
import { MoviesliderComponent } from './components/movieslider/movieslider.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: 'movie', component: MoviesliderComponent},
 { path: 'login', component: LoginComponent},
 {path: 'movie/review/:id', component: ReviewComponent},
 { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
