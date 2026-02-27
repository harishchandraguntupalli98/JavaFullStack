import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure : false,
  standalone : true
})
export class MysortPipe implements PipeTransform {

  transform(arr:any) {

    return arr.sort((a: number,b:number)=> a-b);
  }

}
