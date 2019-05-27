import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchPipe } from './search.pipe';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicformFormarrayComponent } from './dynamicform-formarray/dynamicform-formarray.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    EmployeeDetailsComponent,
    EmployeeResumeComponent,
    SearchPipe,
    DynamicFormQuestionComponent,
    DynamicformFormarrayComponent,
    ReactiveFormDemoComponent,
    FormBuilderDemoComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
