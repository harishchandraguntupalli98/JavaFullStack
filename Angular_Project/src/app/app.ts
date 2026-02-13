import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Categories } from './components/categories/categories';
import { Carousel1 } from './components/carousel1/carousel1';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [Navbar,Body,Footer,Categories,Carousel1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Project');
}
