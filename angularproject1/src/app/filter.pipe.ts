import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, param:string) {
  
    if(param){
      return list ? list.filter(item => item.gender ===param) : list
    }
    return list;
  }
}
