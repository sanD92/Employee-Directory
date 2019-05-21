import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  employeeForm:FormGroup;


  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      name:new FormControl(null),
      email:new FormControl(null),
      salary:new FormControl(null),
      address:new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        zip:new FormControl('')
      })
    })
  }
  onSubmit(){
    console.log(this.employeeForm.value);
  }

}
