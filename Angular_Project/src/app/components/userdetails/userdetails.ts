import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails {

  //Read userId from url,fetch details from api using that id , display the data in ui
  httpClient= inject(HttpClient);
  activatedRoute = inject(ActivatedRoute)
  user :any= signal({});

  ngOnInit(){
    this.activatedRoute.params.subscribe((paramObj:any)=>{
      //console.log(paramObj.id);
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${paramObj['id']}`).
      subscribe(response => {
        this.user.set(response)
      })})
  }
}
