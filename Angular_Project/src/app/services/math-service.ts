import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {

  constructor() { }

  // Addition
  add(a: number, b: number): number {
    return a + b;
  }

  // Subtraction
  subtract(a: number, b: number): number {
    return a - b;
  }

  // Multiplication
  multiply(a: number, b: number): number {
    return a * b;
  }

  // Division
  divide(a: number, b: number): number {
    if (b === 0) {
      return 0; // or throw error
    }
    return a / b;
  }
  
  
}
