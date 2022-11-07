/*
============================================
; Title: Assignment 2.3 - Data Binding
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains app variables like the assignment and isLoggedIn variables.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;

 assignment = 'Exercise 2.3 - Data Binding.';
}
