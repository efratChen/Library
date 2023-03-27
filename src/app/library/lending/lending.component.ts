import { Component, OnInit } from '@angular/core';
import { Lendingervice } from '../services/lending.service';
import { Lending } from './lending';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {
  Lending: Lending[] = [];
  constructor(private Lendingervice: Lendingervice) { }
  ngOnInit(): void {
    this.Lendingervice.getAll().subscribe(res => {
      this.Lending = res;
      console.log("init            ", this.Lending)
    })
  }
  isLate(l: Lending): boolean {
    l.returnDate = new Date(l.returnDate);
    l.lendingDate = new Date(l.lendingDate);
    if (l.returnDate.getFullYear() != 1990) return false;//already returned
    var d = new Date();
    var diff = Math.abs(d.getTime() - l.lendingDate.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays > 30;
  }

  isReturn(l: Lending): boolean {
    l.returnDate = new Date(l.returnDate);
    if (l.returnDate.getFullYear() == 1990) return false;
    return true;
  }
}