import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
})
export class RomanPipe implements PipeTransform {

  transform(value: any, ...args: any) {
    switch(value){
      case 1 : return 'I';break;
      case 2 : return 'II';break;
      case 3 : return 'III';break;
      case 4 : return 'IV';break;
      case 5 : return 'V';break;
      case 6 : return 'VI';break;
      default : return 'Not valid';break;
    }
  }
   

}
