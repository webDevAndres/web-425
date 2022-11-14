/*
============================================
; Title: Exercise 4.2
; Author: Andres Macias
; Date: Nov 13 2022
; Description: contains app component
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment= 'Assignment 4.4 - Async Pipe';
}
