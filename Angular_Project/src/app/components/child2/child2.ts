import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs : ['a'],
  outputs :['eventEmitterObj']
})
export class Child2 {
  a :any;
  userName: any = "Hari Guntupalli"
  userRole : any = "Trainer";

  eventEmitterObj = new EventEmitter();


  sendDatatoParent(){
    this.eventEmitterObj.emit(this.userRole)
  }
}
