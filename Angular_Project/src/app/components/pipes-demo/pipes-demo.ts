import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { EmployeeFilterPipe } from '../../custom-pipes/employee-filter-pipe';
import { MysortPipe } from '../../custom-pipes/mysort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule,FormsModule,RemainingPipe,OrdinalPipe,RomanPipe,AgePipe,SalutationPipe,EmployeeFilterPipe,MysortPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName : string = 'SacHin TenDulkAr';
  salary : number = 5000;
  dateObj = new Date;
  user = {name : 'Hari',age : '27',location : 'kansas'}
  cars = ['tata','honda','maruti','hyundai','mahindra']
  msg : string = "";

  num : number = 21;

  num1 : number = 5;

  age : string = "";

  searchText : string = "";


  employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];

  arr :any = [20,50,40,30,10];



  


}
