/**
 * Title: app.module.ts
 * Author: Andres Macias
 * Date: 11/20/22
 * Description: Book Interface Object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
