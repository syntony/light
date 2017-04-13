import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, public http: Http, private authService: AuthService) { }

  login(event, username, password) {
    event.preventDefault();
    this.authService.login(username, password);
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
