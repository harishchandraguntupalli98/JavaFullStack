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


@Component({
  selector: 'app-body',
  imports: [
    ProductList,DirectiveDemo,EmployeeCrud,PipesDemo,Parent,EmployeesCrud,Employeecomp,UserList,CommentList,EmployeeList,NewuserList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}