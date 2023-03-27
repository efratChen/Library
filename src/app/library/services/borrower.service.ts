import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrower } from '../borrower-list/borrower';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  BorrowerList: Borrower[] = [];
  api = 'https://localhost:44305/api/borrower';
  constructor(private http: HttpClient) {
    console.log("from borrower service");
  }
  getAll(): Observable<Borrower[]> {
    return this.http.get<Borrower[]>(this.api);
  }
  getBorrower(id: number): Observable<Borrower> {
    return this.http.get<Borrower>(this.api + "/" + id);
  }
  add(newBorrower: Borrower): Observable<Borrower> {
    console.log(newBorrower);
    return this.http.post<any>(this.api, newBorrower)
  }
  getName(id: number): string[] {
    let tmp: Borrower;
    let arr: string[] = [];
    this.getBorrower(id).subscribe(x => tmp = x);
    if (tmp) {
      arr[0] = tmp.firstName;
      arr[1] = tmp.lastName;
    }
    return arr;
  }
}
