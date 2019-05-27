import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';

import { DynamicformFormarrayComponent } from './dynamicform-formarray/dynamicform-formarray.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'empList', component: EmployeeListComponent
  },
  {
    path: 'empDetails', component: EmployeeDetailsComponent
  },
  {
    path: 'employeeResume', component: EmployeeResumeComponent
  },
  {
    path: 'reactiveForm', component: ReactiveFormDemoComponent
  },
  {
    path: 'userForm', component: UserFormComponent
  },
  {
    path: 'formBuilder', component: FormBuilderDemoComponent
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
