import {Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { contentHeaders } from '../common/headers';

@Injectable()
export class AuthService implements OnInit {
  public baseUrl: string = 'http://smktesting.herokuapp.com/api/';


  constructor(public router: Router, private http: Http) { }

  ngOnInit() {
    localStorage.setItem('token', '');
  }

  login(username, password) {
    let body = JSON.stringify({ username, password });
    this.http.post( this.baseUrl+'login/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('token', response.json().token);
          this.router.navigate(['']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(username, password) {
    let body = JSON.stringify({ username, password });
    this.http.post( this.baseUrl+'register/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('token', response.json().token);
          this.router.navigate(['']);
        },
        error => {
          alert(error.text());
          console.log(error.details);
        }
      );
    this.login(username,password);
  }

  logout(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['']);
  }

  isAuth() {
    if ( localStorage.getItem('token') && localStorage.getItem('token').length > 0 &&
      localStorage.getItem('token') != "undefined" && localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null )
    {
      return true;
    } else {
      return false;
    }
  }
}
