import { Component, Directive } from '@angular/core';
// import { DataBinding } from '../data-binding/data-binding';
// import { DirectiveDemo } from '../directive-demo/directive-demo';
import { ProductList } from '../product-list/product-list';
import { DirectiveDemo } from '../directive-demo/directive-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';


@Component({
  selector: 'app-body',
  imports: [
    ProductList,DirectiveDemo,EmployeeCrud,PipesDemo,Parent],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}