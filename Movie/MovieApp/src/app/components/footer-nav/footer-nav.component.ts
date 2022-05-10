import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
  loggedInUser:User;
  showLogin:boolean;

  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.setup();
  }

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
}
