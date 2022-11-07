/*
============================================
; Title: Exercise 2.2
; Author: Andres Macias
; Date: Nov 6th 2022
; Description: contains the code for the routes to the components
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
