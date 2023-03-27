import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../book-details/book';
import { Category } from '../../category-list/category';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  b: Book;
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService,
    private bookService: BookService) { }
  ngOnInit(): void {
    this.b = new Book();
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
    });
  }
  submit(): void {
    this.b.id = 0;
    this.b.ageCategory = parseInt(this.b.ageCategory.toString());
    this.b.pageCount = Number(this.b.pageCount);
    this.bookService.addBook(this.b).subscribe(() => {
      this.router.navigate(['BookList'])
    });
  }
}
