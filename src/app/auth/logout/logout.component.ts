import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.authService.logout();
  }

}
