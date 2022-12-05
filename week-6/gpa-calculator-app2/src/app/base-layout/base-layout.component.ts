/**
 * Title: base-layout.module.ts
 * Author: Andres Macias
 * Date: 11/27/22
 * Description: base-layout module
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = "Assignment 6.4 - Input Properties";
  }

  ngOnInit(): void {
  }

}
