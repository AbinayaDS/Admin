import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { Loggedin } from './loggedin';

@Pipe({
  name: 'new1',
  pure:true
})
export class New1Pipe implements PipeTransform {
 

  transform(value:Loggedin [], txt: String): Loggedin[] {
    let filter:Loggedin[]=[];
    for (let index = 0; index < value.length; index++) {
      if(value[index].Username.toLowerCase().indexOf(txt.toLowerCase())>=0){
        filter.push(value[index]);
      }
      
    }
    return filter;
  }
    

 }
