import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book-details/book';
import { Category } from '../category-list/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  abooks: Book[] = [];
  searchBook: string = "";
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private categoryService: CategoryService, private router: Router) {
    this.activatedRoute.params.subscribe(params =>
      this.bookService.getAll(params.name1).subscribe(b => this.abooks = b));
  }
  getAllC: Category[] = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.bookService.getBookByCategory(p.id).subscribe(x => this.abooks = x));
  }
  onClick() {
    this.router.navigate(['BookList'])
  }
}