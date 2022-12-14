/*
============================================
; Title: Exercise 2.4
; Author: Andres Macias
; Date: Nov 7 2022
; Description: contains the paths for the about, composer-list and contact components
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: ComposerListComponent },
  { path: "composer-list", component: ComposerListComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
