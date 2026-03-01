import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employees'],
  outputs:['eventEmitterObj']
})
export class EmployeeTable {

  id : any = 0;
  name : any = "";
  role : any = "";
  salary : any =0;
  status : any = "";
  gender : any = "";

  employees: any = [];

  newEmployee : any = {};

  eventEmitterObj = new EventEmitter();

  sendIdtoEmpCrud(id : number){
    this.eventEmitterObj.emit(id);
  }

}
