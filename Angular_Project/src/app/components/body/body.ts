import { Component, Directive } from '@angular/core';
// import { DataBinding } from '../data-binding/data-binding';
// import { DirectiveDemo } from '../directive-demo/directive-demo';
import { ProductList } from '../product-list/product-list';
import { DirectiveDemo } from '../directive-demo/directive-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';
import { EmployeesCrud } from '../employees-crud/employees-crud';
import { Employeecomp } from '../employeecomp/employeecomp';
import { UserList } from '../user-list/user-list';
import { NewuserList } from '../newuser-list/newuser-list';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoAddComponent } from '../todo-add/todo-add';
import { TodoListComponent } from '../todo-list/todo-list';
import { EmployeesAdd } from '../employees-add/employees-add';
import { EmployeesClear } from '../employees-clear/employees-clear';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { SignalAssignment } from '../signal-assignment/signal-assignment';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { RegistrationForm } from '../registration-form/registration-form';
import { ModelDriverForm } from '../model-driver-form/model-driver-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    ProductList,
    DirectiveDemo,
    EmployeeCrud,PipesDemo,
    Parent,
    EmployeesCrud,
    Employeecomp,
    UserList,
    CommentList,
    EmployeeList,
    NewuserList,
    ObservableDemo1,
    ObservableDemo2,
    SubjectDemo1,TodoAddComponent,TodoListComponent,EmployeesAdd,EmployeesClear,SignalDemo1,SignalDemo2,SignalAssignment,FormDemo1,TemplateForm,RegistrationForm,ModelDriverForm,DynamicForm,RouterOutlet],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}