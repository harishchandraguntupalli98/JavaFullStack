import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-clear',
  imports: [CommonModule],
  templateUrl: './employees-clear.html',
  styleUrl: './employees-clear.css',
})
export class EmployeesClear implements OnInit {

  employees$!: Observable<any>;
  constructor(private empService:EmployeesService){}
  ngOnInit(){
    this.employees$ = this.empService.empObs;
  }

  clearEmployee(id:number){
    this.empService.clearEmp(id);
  }
}