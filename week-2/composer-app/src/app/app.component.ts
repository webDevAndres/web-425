/*
============================================
; Title: Exercise 2.4
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains the assignment variable name for the composer app
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment= 'composer-app';
}
