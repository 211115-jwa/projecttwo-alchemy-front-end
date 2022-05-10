import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
@Input() buttext!: string;
@Input() color!: string;
@Output() btnClick = new EventEmitter();

movies:Movie[] | undefined;
  constructor(private movieServ:MovieService) { }

  async ngOnInit(): Promise<void> {
    this.movies = await this.movieServ.getMovies();
 

    this.buttext = "ClickMe";
  }

onClick(){
  this.btnClick.emit();
}


toggleAddReview(){
  console.log('movies');

}
}
