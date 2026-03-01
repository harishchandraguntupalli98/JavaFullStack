import { Component} from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import Swal from 'sweetalert2';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employees-crud',
  imports: [EmployeeTable,EmployeeAdd],
  templateUrl: './employees-crud.html',
  styleUrl: './employees-crud.css',
})
export class EmployeesCrud {
   
  employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];

  receiveId(id : number){
     Swal.fire({
          title : 'Are you sure?',
          showCancelButton : true,
        }).then((result)=>{
          if(result.isConfirmed){
            this.employees = this.employees.filter((emp) => emp.id != id);
          }
        });
  }

  receiveNewEmpData(addEmp : any){

    addEmp.id = this.employees.length+1;
    this.employees.push(addEmp);
  }
}
