import { Component, OnInit } from '@angular/core';
import { BorrowerService } from '../services/borrower.service';
import { Borrower } from './borrower';

@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.css']
})
export class BorrowerListComponent implements OnInit {
  BorrowerList: Borrower[] = [];
  constructor(private borrowerService: BorrowerService) { }

  ngOnInit(): void {
    this.borrowerService.getAll().subscribe(res => {
      this.BorrowerList = res;
    });
  }
}
