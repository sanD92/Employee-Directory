import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-model/question-base';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { QuestionControlService } from '../question-model/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions:QuestionBase<any>[]=[];
  form:FormGroup;
  payLoad='';


  constructor(private qcs:QuestionControlService) { }

  ngOnInit() {
    this.form=this.qcs.toFormGroup(this.questions);
  }
  onSubmit(){
    this.payLoad=JSON.stringify(this.form.value);
  }

}
