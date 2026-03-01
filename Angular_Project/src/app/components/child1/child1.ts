import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','userName']
})
export class Child1 {
  a :any;
  userName:any;

  num : any = 0;

  // constructor() {
  //   console.log("Child constructor")
  // }
  // ngOnInit() {
  //   console.log('Child ngOnInit');
  // }
  ngOnChanges() {
    console.log('Child ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('Child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child ngOnDestory');
  // }
  // increment() {
  //   this.num++;
  // }

}
