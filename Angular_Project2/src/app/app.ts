import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialDemo } from './components/material-demo/material-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MaterialDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Project2');

  addition(num1:number,num2:number){
    return num1+num2;
  }
}
