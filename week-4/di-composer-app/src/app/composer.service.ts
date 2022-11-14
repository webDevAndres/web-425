/*
============================================
; Title: Exercise 4.2
; Author: Andres Macias
; Date: Nov 13 2022
; Description: contains composer service
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Antonio Vivaldi", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Johannes Brahms", genre: "Classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
