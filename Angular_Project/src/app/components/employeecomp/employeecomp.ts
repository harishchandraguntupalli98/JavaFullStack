import { Component, inject, OnChanges } from '@angular/core';
import { Employee } from '../../services/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecomp',
  imports: [FormsModule],
  templateUrl: './employeecomp.html',
  styleUrl: './employeecomp.css',
})
export class Employeecomp implements OnChanges{

  //mathService = inject(MathService);
  
  empService  = inject(Employee);
  displayEmployeeObj : any[] = [];
  selectedOption : any ="";

  // ngOnInit(){
  //   //this.displayEmployeeObj = this.empService.getAllEmployees(); 
  //   // if(this.selectedOption=="allEmployees"){
  //   //     this.displayEmployeeObj = this.empService.getAllEmployees();
  //   // }else if(this.selectedOption=="maleEmployees"){
  //   //   this.displayEmployeeObj = this.empService.getMaleEmployees();
  //   // }else{
  //   //   this.displayEmployeeObj = this.empService.getFemaleEmployees();
  //   // }
  // }

  ngOnInit(){
    this.displayEmployeeObj = this.empService.employees;
  }

   ngOnChanges() {
    console.log('Parent ngOnChanges');
    // if(this.selectedOption=="allEmployees"){
    //     this.displayEmployeeObj = this.empService.getAllEmployees();
    // }else if(this.selectedOption=="maleEmployees"){
    //   this.displayEmployeeObj = this.empService.getMaleEmployees();
    // }else{
    //   this.displayEmployeeObj = this.empService.getFemaleEmployees();
    // }
  }

  ngDoCheck(){
    console.log("Justchecking");
    //console.log('Parent ngOnChanges');
    if(this.selectedOption=="allEmployees"){
        this.displayEmployeeObj = this.empService.getAllEmployees();
    }else if(this.selectedOption=="maleEmployees"){
      this.displayEmployeeObj = this.empService.getMaleEmployees();
    }else{
      this.displayEmployeeObj = this.empService.getFemaleEmployees();
    }
  }
  
}
