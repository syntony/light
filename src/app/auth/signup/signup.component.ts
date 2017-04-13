import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent {
  constructor(public router: Router, public http: Http, private authService: AuthService) {
  }

  signup(event, username, password) {
    event.preventDefault();
    this.authService.signup(username, password);
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
