/**
 * Title: app.module.ts
 * Author: Andres Macias
 * Date: 11/27/22
 * Description: App module
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Assignment 6.2 - Input/Output Properties, Part 1";
  }
}
