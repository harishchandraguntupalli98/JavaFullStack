import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    skills: [],
    about: ''
  };
  submitMyForm(formData : any){
    console.log(formData);
  }
}
