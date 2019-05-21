import { Injectable } from '../../../node_modules/@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, Validators, FormGroup } from '../../../node_modules/@angular/forms';

@Injectable({
    providedIn:'root'
})
export class QuestionControlService {

    constructor(){}

    toFormGroup(questions:QuestionBase<any>[]){

        let group:any={};
        questions.forEach(question=>{
            group[question.key]=question.required?new FormControl(question.value || '', Validators.required):new FormControl(question.value || '');

        });
        return new FormGroup(group);
    }
}