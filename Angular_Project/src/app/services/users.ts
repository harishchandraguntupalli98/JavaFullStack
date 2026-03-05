import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {

  //newUser_api = 'https://jsonplaceholder.typicode.com/users';
  newUser_api = 'http://localhost:3000/users';

  constructor(private httpClient : HttpClient){}
  getUser():any{
   return this.httpClient.get(this.newUser_api);
  } 
  
  addUser(empObj :any){
    return this.httpClient.post(this.newUser_api,empObj);
  }

  deleteUser(id : any){
    return this.httpClient.delete(this.newUser_api+'/'+id);
  }

  updateEmployee(id:any, emp:any){
    return this.httpClient.put(this.newUser_api + "/" + id, emp);
  }
}


