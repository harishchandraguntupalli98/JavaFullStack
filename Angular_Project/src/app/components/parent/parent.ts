import { Component, OnChanges } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  imports: [Child1,Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  inputs:['a']
      
})
export class Parent implements OnChanges{
  a:any ;

  num : any ;
  //httpClient = new HttpClient(); //though its valid  its not recommended

  constructor(private httpClient : HttpClient) {//depedency injection
    console.log("Parent constructor")
    this.a= 10;    
    this.num = 0;
  }

  parentUserRole :String = ''
  receiveData(userRole: string) {
    this.parentUserRole = userRole;
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
  // increment() {
  //   this.num++;
  // }

}
