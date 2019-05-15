import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){
    
  }

  ngOnInit() {
  }

 
  emplyeeListComponentCall(){
    this.router.navigateByUrl('/empList');
  }
  pageNotFoundCall(){
    this.router.navigateByUrl('/**');
  }
}
