import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortMPG'
})
export class SortMPGPipe implements PipeTransform {
transform(array: Array<any>, args?: any): Array<any> {
    return array.sort((a: any, b: any) => {
      var c = +a.city08; //converting to number
      var d = +b.city08;
      if (c < d) {
        return -1;
      } else if (c > d) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
