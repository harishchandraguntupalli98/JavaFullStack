import { Component } from '@angular/core';

import { EmployeesService } from '../../services/employees-service';

@Component({
  selector: 'app-employees-add',
  imports: [],
  templateUrl: './employees-add.html',
  styleUrl: './employees-add.css',
})
export class EmployeesAdd {

  constructor(private empService:EmployeesService){
  }
  addEmployee(name:string, role:string){

    this.empService.addNewEmp({
      id:0,
      name:name,
      role:role
    });
  }





}
