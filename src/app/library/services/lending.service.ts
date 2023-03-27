import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lending } from '../lending/lending';

@Injectable({
  providedIn: 'root'
})
export class Lendingervice {
  lending: Lending[] = [];

  api = 'https://localhost:44305/api/lending';

  constructor(private http: HttpClient) {
    console.log("from lending service")
  }
  getAll(): Observable<Lending[]> {
    console.log(this.http.get<Lending[]>(this.api))
    return this.http.get<Lending[]>(this.api);
  }
  getLending(id: number): Observable<Lending> {
    return this.http.get<Lending>(this.api + "/" + id);
  }
  addLending(l: Lending): Observable<Lending> {
    return this.http.post<Lending>(this.api + '/', l);
  }
}