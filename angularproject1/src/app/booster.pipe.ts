import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booster'
})
export class BoosterPipe implements PipeTransform {

  transform(x: number,y:number) :number {

    if(x!=0){
        x=Math.pow(x,y)

        return x
    }
    return x;
  }

}
