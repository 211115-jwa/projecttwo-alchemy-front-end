import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Review } from './models/review';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpoilerScreen';
 
  public form: FormGroup | undefined;
  private movieName: string="";



constructor(private http: HttpService,private fb: FormBuilder){
  
}
  ngOnInit(): void {

  }

  


 
}
