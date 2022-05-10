import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';
import { ApiMovie } from 'src/app/models/apimovie';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  @Input() movie2: Movie;
  @Output() emits = new EventEmitter();

  //movie1: Movie[] =[];
  //apiMovie!:ApiMovie;
 // movies!: Movie[];
  // movie: Movie = {
  //   id: 0,
  //   movieName: "Happy Gilmore",
  //   year:1995,
  //   description:"The greatest of all time, slice of Life about the end of the world.",
  //   movieRating:"R",
  //   genre:"Comedy",
  //   image:'https://protwo.s3.us-east-2.amazonaws.com/assets/happyGilmore.png',
  //   url:"https://www.youtube.com/watch?v=pTXhmv1pjcw"
  // }
  //router = ActivatedRoute;
  //movName:string = "Jack+Reacher";

// @Output() buttonClicked = new EventEmitter();
  constructor(private httpServ: HttpService,private dialog:MatDialog) { }

  async ngOnInit() {
  //  this.movie2 = await this.httpServ.getMovieById(1);
  // this.movie2 = await this.httpServ.getMovieById(1);
    // this.httpServ.getMovieById(1).subscribe(resp => {this.movie2 , resp});
    // console.log(this.movie2);
  }
onClick(){
 this.dialog.open(ReviewComponent);
  //dialogRef.afterClosed().subscribe();

    
}
onCreateClick(movieid:number){
  this.httpServ.movieid = this.movie2.id;
  //this.emits.emit(mid);
  this.dialog.open(ReviewComponent);
 }


}
