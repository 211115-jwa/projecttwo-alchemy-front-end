import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movieslider',
  templateUrl: './movieslider.component.html',
  styleUrls: ['./movieslider.component.css']
})
export class MoviesliderComponent implements OnInit {

  movies: Movie[];
  movie = {
    id: 0,
    movieName: "Happy Gilmore",
    year:1995,
    description:"The greatest of all time, slice of Life about the end of the world.",
    movieRatin:"R",
    genre:"Comedy",
    image:'C:/Users/cwild/Documents/GitHub/projecttwo-alchemy-front-end/ProTwoFE/src/assets/happyGilmore.png',
    url:"https://www.youtube.com/watch?v=pTXhmv1pjcw"
  }

  constructor(private httpServ: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.movies = await this.httpServ.getAllMovies();
    console.log(this.movies);
  }


}
