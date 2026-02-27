import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure : false
})
export class RemainingPipe implements PipeTransform {

  transform(value : string){
    return 100 - value.length;
  }

}
