import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exception404',
  templateUrl: './exception404.component.html',
  styleUrls: ['./exception404.component.css']
})
export class Exception404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toContact(): void {
    this.router.navigate(['about/contact']);
  }

}
