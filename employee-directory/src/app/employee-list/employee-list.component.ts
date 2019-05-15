import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../employee-info.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeData;
  
  constructor(private _empServie:EmployeeInfoService) { }

  ngOnInit() {
      this._empServie.fetchEmplyeeData().subscribe(data=>{
        this.employeeData=data;
        console.log(data);
      })
  }
  onSelect(emp){
    alert('I am selected')
  }

}
