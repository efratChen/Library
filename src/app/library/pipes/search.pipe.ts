import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book-details/book';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  booksArr: Book[] = []
  i: number = 0;
  transform(value: Book[], ...args: any[]): Book[] {
    value.forEach(element => {
      if (element.title.includes(args[0]))
        this.booksArr[this.i++] = element;
    });
    return this.booksArr;
  }
}
