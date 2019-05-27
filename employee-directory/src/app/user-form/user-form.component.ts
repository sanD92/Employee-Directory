import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { VALID_ATTRS } from '@angular/core/src/sanitization/html_sanitizer';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.userForm=this.fb.group({
      name:[null,Validators.required],
      email:null,
      size:null,
    });

    this.send();
  }

  get name(){
    return this.userForm.get('name') as FormControl;
  }
  
  get email(){
    return this.userForm.get('email') as FormControl;
  }


  send(){
    console.log(this.userForm.value);
  }
  reset(){
    this.userForm.reset()
  }

}
