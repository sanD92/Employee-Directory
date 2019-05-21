import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: any[];
  
  constructor( private router:Router,service: QuestionService){
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

 
  emplyeeListComponentCall(){
    this.router.navigateByUrl('/empList');
  }
  pageNotFoundCall(){
    this.router.navigateByUrl('/**');
  }
  dynamicFormCompnonentCall(){
    this.router.navigateByUrl('/dynamicForm');
  }
  reactiveFormCompnonentCall(){
    this.router.navigateByUrl('/reactiveForm');
  }
  formBuilderCompnonentCall(){
    this.router.navigateByUrl('/formBuilder');
  }
}
