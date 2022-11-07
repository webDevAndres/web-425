/*
============================================
; Title: Assignment 2.3 - Data Binding
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains typescript Person class and the myProfile variable.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#Typescript",
    "#2020",
    "#CodingWithAngular",
    "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(`\n . Full name: ${this.fullName}\n . Favorite Food: ${this.favoriteFood}\n . Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    // a new instance of the PersonClass is instantiated with a name, food and color and stored in the myProfile property.
    this.myProfile = new Person("Andres Macias", "Pizza", "Purple");
    this.myProfile.toString();
   }


  ngOnInit(): void {
  }

}
