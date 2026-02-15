import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
    flag = true;
    flag2 = false;
    password = '';
    message : string ='';
    selectedState = "";
    selectedColor = "";
    count =0;
    celsius=0;
    num1 = 0;
    num2 = 0;
    operator = '';
    result = 0;

    calculate() {

      if(this.operator == '+') {
        this.result = this.num1 + this.num2;
      }
    
      else if(this.operator == '-') {
        this.result = this.num1 - this.num2;
      }
    
      else if(this.operator == '*') {
        this.result = this.num1 * this.num2;
      }
    
      else if(this.operator == '/') {
        this.result = this.num1 / this.num2;
      }
    
    }
}
