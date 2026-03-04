import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, signal } from '@angular/core';
import { single } from 'rxjs';
import { Users } from '../../services/users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newuser-list',
  imports: [FormsModule],
  templateUrl: './newuser-list.html',
  styleUrl: './newuser-list.css',
})
export class NewuserList {

  newUserArr:any = signal([]);
  newEmployee: any = {
    name: '',
    id: '',
    username: '',
    email: '',
    phone: '',
    address: {
      city: ''
    }
  };

  constructor(private user : Users){
  }
  ngOnInit(){
    this.displayUsers();
  }

  displayUsers(){
    this.user.getUser().subscribe((response :any)=>{
      this.newUserArr.set(response);
    });
  }

  AddDataToTable(){
    console.log(this.newEmployee);
    this.user.addUser(this.newEmployee).subscribe((response :any)=>{
        this.displayUsers();
    });
  }
}

