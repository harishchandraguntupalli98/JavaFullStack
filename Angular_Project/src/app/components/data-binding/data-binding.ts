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
}
