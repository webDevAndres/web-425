/**
 * Title: books.service.ts
 * Author: Andres Macias
 * Date: 11/20/2022
 * Description: Service class for book objects
 */

 import { Injectable } from '@angular/core';
 import { IBook } from './book.interface';
 import { Observable } from 'rxjs';
 import { of } from 'rxjs';
 import { map } from 'rxjs/operators';

 @Injectable({
   providedIn: 'root'
 })
 export class BooksService {

   books: Array<IBook>;

   constructor() {
     this.books = [
       {
         isbn: '978-0385737951',
         title: 'The Maze Runner',
         description: 'When Thomas wakes up in the lift, the only thing he can remember is his name. He\'s surrounded by strangers—boys whose memories are also gone.Outside the towering stone walls that surround the Glade is a limitless, ever-changing maze. It\'s the only way out—and no one\'s ever made it through alive.',
         numOfPages: 375,
         authors: ['James Dashner']
       },
       {
         isbn: '978-0385736008',
         title: 'The Alchemyst: The Secrets of the Immortal Nicholas Flamel',
         description: 'Nicholas Flamel was born in Paris on 28 September 1330. Nearly seven hundred years later, he is acknowledged as the greatest Alchemyst of his day. It is said that he discovered the secret of eternal life. The records show that he died in 1418. But his tomb is empty and Nicholas Flamel lives. The secret of eternal life is hidden within the book he protects—the Book of Abraham the Mage. It\'s the most powerful book that has ever existed.',
         numOfPages: 394,
         authors: ['Michael Scott']
       },
       {
         isbn: '978-0316603409',
         title: 'Cirque Du Freak A Living Nightmare',
         description: 'Darren Shan and his best friend, Steve, get tickets to the Cirque Du Freak, a wonderfully gothic freak show featuring weird, frightening half human/half animals who interact terrifyingly with the audience. In the midst of the excitement, true terror raises its head when Steve recognizes that one of the performers-- Mr. Crepsley-- is a vampire! Steve remains after the show finishes to confront the vampire-- but his motives are surprising! In the shadows of a crumbling theater, a horrified Darren eavesdrops on his friend and the vampire, and is witness to a monstrous, disturbing plea.',
         numOfPages: 280,
         authors: ['Darren O\'Shaughnessy']
       },
       {
         isbn: '978-0786856299',
         title: 'The Lightning Thief',
         description: 'Percy Jackson is a good kid, but he can\'t seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse - Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him. When Percy\'s mom finds out, she knows it\'s time that he knew the truth about where he came from, and that he go to the one place he\'ll be safe. She sends Percy to Camp Half Blood, a summer camp for demigods (on Long Island), where he learns that the father he never knew is Poseidon, God of the Sea. Soon a mystery unfolds and together with his friends—one a satyr and the other the demigod daughter of Athena - Percy sets out on a quest across the United States to reach the gates of the Underworld (located in a recording studio in Hollywood) and prevent a catastrophic war between the gods.',
         numOfPages: 377,
         authors: ['Rick Riordan']
       },
       {
         isbn: '978-0439023481',
         title: 'The Hunger Games',
         description: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
         numOfPages: 374,
         authors: ['Suzanne Collins']
       }
     ]
   }

   getBooks(): Observable<IBook[]> {
     return of(this.books);
   }

   getBook(isbn: string): IBook {
     for (let book of this.books) {
       if (book.isbn === isbn) {
         return book;
       }
     }
     return {} as IBook;
   }
 }
