import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/employees'

  httpClient = inject(HttpClient)

  gerAllEmployees():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(this.apiUrl);

  }
  
}
