import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {

  transform(name: any, gender: any){

    if(gender=="male"){
      return "Mr. "+name;
    }
    else{
      return "Mrs. "+name
    }
  }

}
