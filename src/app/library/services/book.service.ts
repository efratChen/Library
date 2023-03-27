import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-details/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  tmp: Book[] = [];

  api = 'https://localhost:44305/api/book';

  constructor(private http: HttpClient) {
  }
  getAll(id?: number): Observable<any> {
    if (id) return this.getBook(id);

    let b = this.http.get<Book[]>(this.api);
    return b;
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.api + '/' + id);
  }

  getBookByCategory(id: number): Observable<Book[]> {
    if (id) return this.http.get<Book[]>(this.api + "/byAge/" + id);
    return this.getAll();
  }
  addBook(b: Book): Observable<Book> {
    return this.http.post<Book>(this.api, b);
  }
  getTitle(id: number): string {
    let t: string;
    this.getBook(id).subscribe(x => t = x.title);
    return t;
  }
}
