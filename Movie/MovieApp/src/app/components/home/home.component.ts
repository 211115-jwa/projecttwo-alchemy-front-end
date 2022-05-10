import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clicked = false;

  page = {
    name: 'Star',
    year: 1977,
    img: 'https://protwo.s3.us-east-2.amazonaws.com/assets/curtain-PROTOTYPE2.png'
  };
  @Output() login: EventEmitter<any> = new EventEmitter();
  usernameInput!:string;
  passwordInput!:string;
  
  constructor(private userServ:UserService) { }


  ngOnInit(): void {
    this.setup();
  
  }

  logIn() {
    this.userServ.logIn(this.usernameInput,this.passwordInput).then(resp => {
      this.login.emit();
    });
console.log(this.usernameInput + "  : " + this.passwordInput);
  }

  loggedInUser:User;
  showLogin:boolean;

  setup() {
    this.userServ.checkLogin().then(resp => {
      this.loggedInUser = this.userServ.loggedInUser;
      this.showLogin=false;
      console.log(this.loggedInUser);
    });
  }

  logOut() {
    this.userServ.logOut();
    this.loggedInUser = null;
  }



  handleClick() {
    this.clicked = true;
  }
 }