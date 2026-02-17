import { Component, Directive } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectiveDemo } from '../directive-demo/directive-demo';


@Component({
  selector: 'app-body',
  imports: [DirectiveDemo,DataBinding],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}