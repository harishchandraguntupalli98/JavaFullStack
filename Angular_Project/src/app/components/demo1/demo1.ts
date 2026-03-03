import { Component } from '@angular/core';
import { ObjectUtilService } from '../../services/object-util-service';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  intervalId: number;

  constructor(private mathService : MathService, private objectUtil : ObjectUtilService) {//dependency injection
    this.intervalId = setInterval(() => {
      console.log('I am setInterval from demo-1')
    }, 1000)
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');
    console.log('isEmpty',this.objectUtil.isEmpty,{a:10,b:20});
    let sumResult = this.mathService.add(10,20);
    console.log("SumResult :",sumResult)
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.intervalId);
  }

}