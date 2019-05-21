import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-dynamicform-formarray',
  templateUrl: './dynamicform-formarray.component.html',
  styleUrls: ['./dynamicform-formarray.component.css']
})
export class DynamicformFormarrayComponent implements OnInit {
  
  orderForm: FormGroup;
  items: FormArray;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  //Adding to the FormArray Dynamically
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
