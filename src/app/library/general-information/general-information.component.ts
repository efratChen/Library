import { Component, OnInit } from '@angular/core';
import { Book } from '../book-details/book';
import { Borrower } from '../borrower-list/borrower';
import { BookService } from '../services/book.service';
import { BorrowerService } from '../services/borrower.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private borrowerService: BorrowerService, private bookService: BookService) { }

  // option 1:
  // borrowers: Borrower[];
  // books: Book[];

  // option 2:
  borrowers: number;
  books: number;
  // option 1:
  // ngOnInit(): void {
  //   this.borrowerService.getAll().subscribe(res => {
  //     this.borrowers = res;
  //   });
  //   this.bookService.getAll().subscribe(res => {
  //     this.books = res;
  //   }
  //   );
  // }

  // option 2:
  ngOnInit(): void {
    this.borrowerService.getAll().subscribe(res => {
      this.borrowers = res.length;
    });
    this.bookService.getAll().subscribe(res => {
      this.books = res.length;
    }
    );
  }
}
