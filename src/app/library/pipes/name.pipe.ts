import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  str: string = '';
  transform(s: string, ...args: unknown[]): string {
    for (let i = 0; i < s.length; i++) {
      if (s[i] != ' ')
        this.str += s[i];
      else {
        this.str += ' ' + s[i + 1] + '.';
        break;
      }
    }
    return this.str;
  }

}
