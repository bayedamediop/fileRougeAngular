import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string, propName: string ): any {
    if (value.length === 0 || search.length === 0){
      return value;
    }
    const resultArray = [];
    for (const item of value ){
      // if (item[propName] === search){ premiere methode
      //  if (item[propName].startsWith(search)){
      if (item[propName].includes(search)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
