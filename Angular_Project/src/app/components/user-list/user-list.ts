import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  user_api = 'https://jsonplaceholder.typicode.com/users';
  userArr :any = signal([]);

  constructor(private httpClient : HttpClient){
  }
  
  ngOnInit(){
    this.fetUserDataAngular() 
  }

  fetUserDataAngular(){
    this.httpClient.get(this.user_api).subscribe((response)=>{
      console.log(response);
      this.userArr.set(response);
    })
  }
}
