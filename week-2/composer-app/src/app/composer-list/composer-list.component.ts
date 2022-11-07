/*
============================================
; Title: Exercise 2.4 - Routing in Action
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains the Composer Class and composer property for the module
;===========================================
*/

import { Component, OnInit } from '@angular/core';

export class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // instantiates new composer objects
    this.composers = [
      new Composer("Ludwig Van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Johannes Brahms", "Classical")]
  }

  ngOnInit(): void {
  }

}
