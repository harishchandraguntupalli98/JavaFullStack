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

  isLoading = signal(false);

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
    //this.displayUsers();
  }

  loadUserData(){
    this.isLoading.set(true);
    //this.displayUsers();
       this.user.getUser().subscribe((response :any)=>{
      this.newUserArr.set(response);
      this.isLoading.set(false);
    });
  }

  // displayUsers(){
  //   this.user.getUser().subscribe((response :any)=>{
  //     this.newUserArr.set(response);
  //     this.isLoading.set(false);
  //   });
  // }

  AddDataToTable(){
    console.log(this.newEmployee);
    this.user.addUser(this.newEmployee).subscribe((response :any)=>{
        //this.displayUsers();
        this.loadUserData();
    });
  }

  deleteUser(id : any){

    this.user.deleteUser(id).subscribe((response :any)=>{
       //this.displayUsers();
      this.loadUserData();
    })
  }

  editUser(user:any){
    this.newEmployee = user;
  }
  updateUser(){

    this.user.updateEmployee(this.newEmployee.id,this.newEmployee)
    .subscribe(()=>{
      //this.displayUsers();
      this.loadUserData();
    });
  }
}

