import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from '../../node_modules/rxjs';
//import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  URL='assets/employee-information.json';
  employeeDetails = new BehaviorSubject(null);

  constructor(private _http:HttpClient) { }

  fetchEmplyeeData():Observable<any>{
   return this._http.get(this.URL);
  }

}
