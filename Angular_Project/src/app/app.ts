import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Categories } from './components/categories/categories';
import { Carousel1 } from './components/carousel1/carousel1';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveDemo } from './components/directive-demo/directive-demo';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Body,
    Footer,
    Categories,
    Carousel1,
    DataBinding,
    DirectiveDemo
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
