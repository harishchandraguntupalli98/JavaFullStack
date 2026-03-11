import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driver-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './model-driver-form.html',
  styleUrl: './model-driver-form.css',
})
export class ModelDriverForm {
  registerForm :any;

  constructor(){
    this.registerForm = new FormGroup({
      firstName : new FormControl('virat',[Validators.required,Validators.minLength(5)]),
      lastName : new FormControl('kohli',[Validators.required,Validators.minLength(5)]),
      email : new FormControl('virat@gmail.com'),
      address : new FormGroup({
        street: new FormControl('street-1'),
        city: new FormControl('texas'),
        pincode: new FormControl('12345')
      }),
    },
  {updateOn:'blur'},
);
}

  submitMyForm(formData:any){
    console.log(formData);

  }
  updateFormData(){
    this.registerForm.pathValue({firstName:'rohit'});
    this.registerForm.setValue({firstName:'rohit'});
  }

}
