import { Component, OnChanges, ViewChild, viewChild } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-parent',
  imports: [Child1,Child2,FormsModule,Demo1,Demo2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  inputs:['a']
      
})
export class Parent {
  a:any ;

  num : any ;
  flag : any = true;
  //httpClient = new HttpClient(); //though its valid  its not recommended

  
  parentUserRole :String = ''
  receiveData(userRole: string) {
    this.parentUserRole = userRole;
  }

  user:any = {
      name : "Hari",
      skills : ["Angular"]
  };

  @ViewChild('myInputBox') myInputBox :any;

  constructor(private httpClient : HttpClient) {//depedency injection
    console.log("Parent constructor")
    console.log(this.myInputBox);
    this.a= 10;    
    this.num = 0;
  }



  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
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
  //   console.log(this.myInputBox);
  //   this.myInputBox.nativeElement.focus();
  //   this.myInputBox.nativeElement.style.backgroundColor='red';
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
