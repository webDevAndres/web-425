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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>
  txtSearchControl = new FormControl('');

  constructor(private ComposerService: ComposerService) {
    this.composers = this.ComposerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
    }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
