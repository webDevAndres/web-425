/*
============================================
; Title: Assignment 3.4
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains the app routes and the route guard
;========
*/

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes: Routes = [
  {path: "", component: SignInComponent},
  // the signInGuard will redirect if the isLoggedIn variable is false
  {path: "home", component: HomeComponent, canActivate: [SignInGuard]}
]
