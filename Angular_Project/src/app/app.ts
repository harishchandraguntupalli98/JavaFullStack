import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Categories } from './components/categories/categories';
import { Carousel1 } from './components/carousel1/carousel1';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveDemo } from './components/directive-demo/directive-demo';
import { ProductList } from './components/product-list/product-list';
import { EmployeeCrud } from './components/employee-crud/employee-crud';
import { PipesDemo } from './components/pipes-demo/pipes-demo';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Body,
    Footer,
    Categories,
    Carousel1,
    DataBinding,
    DirectiveDemo,
    ProductList,
    EmployeeCrud,
    PipesDemo
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
