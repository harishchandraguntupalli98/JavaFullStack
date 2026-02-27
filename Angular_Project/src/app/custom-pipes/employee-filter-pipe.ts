import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: any[], searchText : string) {

        if(!searchText){
          return employees;
        }
        return employees.filter(emp => emp.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
