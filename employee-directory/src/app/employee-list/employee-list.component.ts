import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../employee-info.service';
import { Router } from '../../../node_modules/@angular/router';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeData;
  constructor(private _empServie:EmployeeInfoService,private router:Router) { }

  ngOnInit() {
      this._empServie.fetchEmplyeeData().subscribe(data=>{
        this.employeeData=data;
        //console.log(data);
      })
    /*   this.bSubject.subscribe((data) => {
        console.log('Subscriber A:', data);
    }); */
  }
  onSelect(emp){
   // console.log('I am selected',emp);
    //empDetails
    this.router.navigateByUrl('empDetails');
    console.log('On select ',emp)
    //console.log(typeof emp);
    this._empServie.employeeDetails.next(emp);
  }

}
