import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../interfaces/juego.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  
  transform(value: Juego[], termino: string) {
    if(value.length!==0 && termino!==''){
      const res = value.filter(res => res.title.toLocaleLowerCase().includes(termino.toLocaleLowerCase()));
      if(res.length === 0){
        return undefined
      }else{
        return res;
      }
    }else{
      return value;
    }
  }

}
