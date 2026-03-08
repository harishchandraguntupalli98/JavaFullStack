import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Employees {
  id: any;
  name: string;
  role: string;
  salary:any;
}
const initialEmpData = [
  { id: 1, name: 'Virat Kohli', role: 'Manager', salary: 85000 },
  { id: 2, name: 'Rohit Sharma', role: 'Developer', salary: 65000 },
  { id: 3, name: 'MS Dhoni', role: 'Tester', salary: 50000 }
];
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private empSubject = new BehaviorSubject<Employees[]>(initialEmpData); // writeable
  readonly empObs = this.empSubject.asObservable(); // readonly, only subscribe
  
  private empArr: Employees[] = this.empSubject.value;
  private nextId = 3;
  addNewEmp(item: any) {
    item.id = this.nextId++;
    this.empArr.push(item);
    this.empSubject.next([...this.empArr]);
  }
  clearEmp(id: number) {
    this.empArr.forEach((emp, ind) => {
      if (emp.id === id) {
        this.empArr.splice(ind, 1);
      }
      this.empSubject.next([...this.empArr]);
    });
  }
}