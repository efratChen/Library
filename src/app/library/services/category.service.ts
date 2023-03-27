import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category-list/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Category[] = [];

  api = "https://localhost:44305/api/category";

  constructor(public http: HttpClient) {
    console.log("from categories service");
  }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api);
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.api + "/" + id);
  }

}
