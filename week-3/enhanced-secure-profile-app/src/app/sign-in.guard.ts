/*
============================================
; Title: Assignment 3.4
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains the CanActivate route guard for the application using the isLoggedIn variable
;========
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // this section is what controls the access to the page
    let isLoggedIn = route.queryParams.isLoggedIn;

    if(isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
