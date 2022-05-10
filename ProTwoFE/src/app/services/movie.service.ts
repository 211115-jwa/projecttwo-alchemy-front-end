import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  authHeaders = {'Content-type':'application/json','Token':''};
  regHeaders = {'Content-type':'application/json'};



  constructor(private url: UrlService) { }


  async getMovies(): Promise<Movie[]> {
    let resp = await fetch(this.url.url + 'movies');

    if (resp.status===200) {
      return await resp.json();
    }
    return await resp.json();
  }


  async getMovieById(id:number): Promise<Movie> {
    let resp = await fetch(this.url.url + 'pets/' + id);

    if (resp.status===200) {
      return await resp.json();
    }
    return await resp.json();
  }

}
