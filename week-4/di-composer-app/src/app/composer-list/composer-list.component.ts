/*
============================================
; Title: Exercise 4.2
; Author: Andres Macias
; Date: Nov 13 2022
; Description: contains composer list component
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>

  constructor(private ComposerService: ComposerService) {
    this.composers = this.ComposerService.getComposers();
    }

  ngOnInit(): void {
  }

}
