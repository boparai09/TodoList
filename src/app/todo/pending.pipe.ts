import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pending'
})
export class PendingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    
    let counter = args;
    counter.count = 0;
    let result = value.filter(todo => {!todo.completed;});
    if (counter && !!result.length) {
      counter.count = result.length;
      console.log(result.length);
    }
    return result;
  }

}
