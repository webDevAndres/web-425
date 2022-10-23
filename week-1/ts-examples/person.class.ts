/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 25 June 2017
; Modified By: Andres Macias
; Description: Creates the Person class and display it to the console
;===========================================
*/ 
import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Andres", "Macias");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);