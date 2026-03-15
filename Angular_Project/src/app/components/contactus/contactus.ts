import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule,FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {

  user={
    firstName:"Virat",
    lastName:"Kohli",
    email:"@gmail.com"
  }

  hasChanges:boolean = true;
  submitMyForm(formData :any){
    console.log(formData);
    this.hasChanges=false;
  }

}
