import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any) {
      let birthYear = new Date(value).getFullYear();
      let currentYear = new Date().getFullYear();

      let age = currentYear - birthYear;

      return age +" years old"
  }
}
