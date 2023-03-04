import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
rvalue='';

  transform(value:string): string {
    return this.rvalue = value.split('').reverse().join('');
  }

}
