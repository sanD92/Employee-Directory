import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchPipe } from './search.pipe';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicformFormarrayComponent } from './dynamicform-formarray/dynamicform-formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    EmployeeDetailsComponent,
    EmployeeResumeComponent,
    SearchPipe,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicformFormarrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
