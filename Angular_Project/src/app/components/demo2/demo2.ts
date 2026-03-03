import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {

  mathService = inject(MathService);//Dependency Injection
  ngOnInit() {
    console.log('Demo-2 ngOnInit');
    let mul = this.mathService.multiply(2,5);
    console.log('Mul :',mul);
   }

  // let avgResult = this.mathService.subtract(){

  // }

  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy')
  }
}