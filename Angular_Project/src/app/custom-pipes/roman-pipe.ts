import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
})
export class RomanPipe implements PipeTransform {

  transform(value: any, ...args: any) {
    let roman='';
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    for(let i=0;i<=numbers.length;i++){

      while(value>=numbers[i]){
        roman = roman+symbols[i];
        value = value-value[i];

      }

    }
    return roman;
  }
   

}
