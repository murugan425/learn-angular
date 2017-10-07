import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform (value: string, limit?: number, args?: any) {
    if (!value) { return null; }
    return value.substr(0, (limit) ? limit : 50) + '.......';
  }

}
