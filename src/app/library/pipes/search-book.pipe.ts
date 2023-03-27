import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book-details/book';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {
  books1: Book[] = [];
  transform(value: Book[], ...args: any[]): Book[] {
    this.books1 = [];
    for (const v of value) {
      if (v.author.toLowerCase().includes(args[0].toLowerCase()) ||
        v.id.toString().toLowerCase().includes(args[0].toLowerCase()) ||
        v.summary.toLowerCase().includes(args[0].toLowerCase()) ||
        v.title.toLowerCase().includes(args[0].toLowerCase()))
        this.books1.push(v);
    }
    return this.books1;
  }
}