import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './library/about/about.component';
import { BookDetailsComponent } from './library/book-details/book-details.component';
import { BookListComponent } from './library/book-list/book-list.component';
import { BorrowerListComponent } from './library/borrower-list/borrower-list.component';
import { LendingFormComponent } from './library/forms/lending-form/lending-form.component';
import { ContactComponent } from './library/contact/contact.component';
import { Exception404Component } from './library/exception404/exception404.component';
import { FormComponent } from './library/forms/borrower-form/borrower-form.component';
import { GeneralInformationComponent } from './library/general-information/general-information.component';
import { RegulationsAndProcedureComponent } from './library/regulations-and-procedure/regulations-and-procedure.component';
import { ReviewExcerciseComponent } from './library/review-excercise/review-excercise.component';
import { SubManagementComponent } from './library/sub-management/sub-management.component';
import { BookFormComponent } from './library/forms/book-form/book-form.component';
import { LendingComponent } from './library/lending/lending.component';

const routes: Routes = [
  {
    path: 'BookList',
    component: BookListComponent
  },
  {
    path: '',
    component: BookListComponent,
    pathMatch: 'full'
  },
  {
    path: 'BookList',
    component: BookListComponent
  }, {
    path: 'bookDetails/:book',
    component: BookDetailsComponent
  }
  , {
    path: 'BorrowerList',
    component: BorrowerListComponent
  },
  {
    path: 'lendingList',
    component: LendingComponent
  },
  {
    path: 'sub-management',
    component: SubManagementComponent,
    children: [
      {
        path: 'add-lending',
        component: LendingFormComponent
      },
      {
        path: 'add-book',
        component: BookFormComponent
      }
    ]
  },
  {
    path: 'sub-management/add-lending',
    component: LendingComponent
  }, {
    path: 'reviewExcercise',
    component: ReviewExcerciseComponent
  }, {
    path: 'about',
    component: AboutComponent,
    children: [{
      path: 'generalInformation',
      component: GeneralInformationComponent
    }, {
      path: 'regulationsAndProcedure',
      component: RegulationsAndProcedureComponent
    }, {
      path: 'contact',
      component: ContactComponent
    }, {
      path: '',
      component: GeneralInformationComponent
    }, {
      path: 'exception404',
      redirectTo: '/BookList'
    }]
  }
  , {
    path: 'newBorrower',
    component: FormComponent
  }, {
    path: '',
    component: BookListComponent
  }
  , {
    path: 'reviewExcercise',
    component: ReviewExcerciseComponent
  }, {
    path: 'about',
    component: AboutComponent,
    children: [{
      path: 'generalInformation',
      component: GeneralInformationComponent
    }, {
      path: 'regulationsAndProcedure',
      component: RegulationsAndProcedureComponent
    }, {
      path: 'contact',
      component: ContactComponent
    }, {
      path: '',
      component: GeneralInformationComponent
    }, {
      path: '**',
      component: Exception404Component
    }]
  }
  , {
    path: '',
    component: BookListComponent
  }, {
    path: '**',
    component: Exception404Component
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
