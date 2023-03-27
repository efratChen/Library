import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleComponent } from './style/style.component';
import { CategoryListComponent } from './library/category-list/category-list.component';
import { BookListComponent } from './library/book-list/book-list.component';
import { BorrowerListComponent } from './library/borrower-list/borrower-list.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { NamePipe } from './library/pipes/name.pipe';
import { SearchPipe } from './library/pipes/search.pipe';
import { MenuComponent } from './library/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ReviewExcerciseComponent } from './library/review-excercise/review-excercise.component';
import { Exception404Component } from './library/exception404/exception404.component';
import { AboutComponent } from './library/about/about.component';
import { GeneralInformationComponent } from './library/general-information/general-information.component';
import { RegulationsAndProcedureComponent } from './library/regulations-and-procedure/regulations-and-procedure.component';
import { ContactComponent } from './library/contact/contact.component';
import { FormComponent } from './library/forms/borrower-form/borrower-form.component';
import { LendingFormComponent } from './library/forms/lending-form/lending-form.component';
import { ManagementComponent } from './library/management/management.component';
import { SubManagementComponent } from './library/sub-management/sub-management.component';
import { SearchBookPipe } from './library/pipes/search-book.pipe';
import { LendingComponent } from './library/lending/lending.component';
import { BookFormComponent } from './library/forms/book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
]
@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    QuizComponent,
    StyleComponent,
    CategoryListComponent,
    BookListComponent,
    BookDetailsComponent,
    BorrowerListComponent,
    NamePipe,
    SearchPipe,
    MenuComponent,
    ReviewExcerciseComponent,
    Exception404Component,
    AboutComponent,
    GeneralInformationComponent,
    RegulationsAndProcedureComponent,
    ContactComponent,
    FormComponent,
    LendingFormComponent,
    ManagementComponent,
    SubManagementComponent,
    SearchBookPipe,
    LendingComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }