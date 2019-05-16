import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../employee-info.service';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {

  employeeResumeDetails: any=[];;


  constructor(private _empServie:EmployeeInfoService) { }

  ngOnInit() {
    this._empServie.employeeDetails.subscribe(info=>{
      this.employeeResumeDetails=  Array.of(info);;
     // console.log("Selected Employee Deatils",info);
    })
  }


}
