import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
