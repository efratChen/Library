import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category-list/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';
import { Book } from './book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isOversubtle(): boolean {
    return this.b.pageCount < 50 && this.b.ageCategory != 1;
  }
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }
  b: Book;
  c: Category;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBook(params.id).subscribe(bd => {
        this.b = bd;
        if (this.b) {
          console.log("its err");

        };
        this.categoryService.getCategory(this.b.ageCategory).subscribe(c1 => { this.c = c1 });
      })
    })
  }
}
