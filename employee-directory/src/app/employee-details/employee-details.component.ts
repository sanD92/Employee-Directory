import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeInfoService } from '../employee-info.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails: any=[];

  constructor(private _empServie:EmployeeInfoService) { }

  ngOnInit() {
  
    this._empServie.employeeDetails.subscribe(info=>{
      this.employeeDetails=  Array.of(info);;
     // console.log("Selected Employee Deatils",info);
    })

  }

}
