import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Review } from 'src/app/models/review';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movies!: Movie[];
  title = 'SpoilerRoom';
  idInput: string = "";
  searchText: string = '';
  public form: FormGroup;
 movie: Movie;
  userid: number;
  

id:number;
  review = {
    id: 0,
    reviewTitle: "title for your review",
    reviewText: "tell us about the movie your reviewing",
    ratingReview: 0,
    sentAt: "",
    user: 2,
    movie: 1
  }
  constructor(private route: ActivatedRoute,
    private httpServ: HttpService,
    private fb: FormBuilder,
    private userServ: UserService) {

    this.form = this.fb.group({
      ratingReview: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getMovie();
    //this.id = value;
  }

  mid:number = this.httpServ.movieid;

  async getMovie() {
   //const id = Number(this.route.snapshot.paramMap.get('id'));


    this.movie = await this.httpServ.getMovieById(this.mid);
  }

  async sendRev() {
    this.userid = this.userServ.loggedInUser.id;
    this.review.user = this.userid;
    this.review.movie = this.movie.id;
    console.log(this.review);
    await this.httpServ.sendReview(this.review).subscribe(
      (resp: Review) => {
        this.review = resp;
       // console.log(this.review);
      });
      alert("Review Submitted!");

  }
}
