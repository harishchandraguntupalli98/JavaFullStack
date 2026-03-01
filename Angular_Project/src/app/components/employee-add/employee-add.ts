import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['eventEmitterObj']
})
export class EmployeeAdd {

  newEmployee: any = {
    name: '',
    role: '',
    salary: 0,
    status: '',
    gender: ''
  };
  eventEmitterObj = new EventEmitter();

  AddDataToTable(){
    this.eventEmitterObj.emit(this.newEmployee);
  }


}
