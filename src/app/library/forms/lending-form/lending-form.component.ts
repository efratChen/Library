import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../book-details/book';
import { Borrower } from '../../borrower-list/borrower';
import { Lending } from '../../lending/lending';
import { BookService } from '../../services/book.service';
import { BorrowerService } from '../../services/borrower.service';
import { Lendingervice } from '../../services/lending.service';

@Component({
  selector: 'app-lending-form',
  templateUrl: './lending-form.component.html',
  styleUrls: ['./lending-form.component.css']
})
export class LendingFormComponent implements OnInit {
  cnt = 0;
  bookFull = "";
  borrowerFull = "";
  lendingForm = this.formBuilder.group({
    book: new FormControl("", Validators.required),
    borrower: new FormControl("", Validators.required)
  });
  constructor(private borrowerService: BorrowerService,
    private bookService: BookService,
    private Lendingervice: Lendingervice,
    private formBuilder: FormBuilder,
    private router: Router) { }
  borrowers: Borrower[];
  books: Book[] = [];
  Lending: Lending[] = [];
  ngOnInit(): void {
    this.borrowerService.getAll().subscribe(res => {
      this.borrowers = res
    });
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    })

  }
  submit(): void {
    this.cnt++;
    let { borrower, book } = this.lendingForm.value;
    book = parseInt(book);
    let bookObj = this.books.find(p => p.id == book);
    borrower = parseInt(borrower);
    let borrowerObj = this.borrowers.find(p => p.id == borrower);
    this.borrowerService.getBorrower(borrower).subscribe(res => {
      let l: Lending = new Lending(this.cnt, borrower, borrowerObj.firstName, borrowerObj.lastName, book, bookObj.title, new Date());
      this.Lendingervice.addLending(l);
      this.router.navigate(['lendingList']);
    });
  }
}
