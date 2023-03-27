import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from "../../services/category.service";
import { Category } from "../../category-list/category";
import { BorrowerService } from '../../services/borrower.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-borrower-form',
  templateUrl: './borrower-form.component.html',
  styleUrls: ['./borrower-form.component.css']
})
export class FormComponent implements OnInit {
  borrowerForm = new FormGroup({
    tz: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    ageCategory: new FormControl('', [Validators.required]),
    firstName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]{2,15}$")]),
    lastName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]{2,15}$")]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{3,10}$")]),
    email: new FormControl("", [Validators.email])
  });
  getAll: Category[] = [];

  constructor(private categoryService: CategoryService, private borrowerService: BorrowerService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(c => this.getAll = c);

  }
  @Output() added = new EventEmitter<String>();
  @Input() displayForm: string;

  submit(): void {
    this.borrowerForm.value.id = 0;
    this.borrowerForm.value.ageCategory = Number(this.borrowerForm.value.ageCategory);
    this.borrowerService.add(this.borrowerForm.value).subscribe(() => {
      this.router.navigate(["BorrowerList"]);
      this.added.emit();
    });
  }
}