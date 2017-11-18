import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'cdate'})
export class CDatePipe implements PipeTransform {
  transform(value: string): Date {
  	if(value){
  	    return new Date(value);
  	}
  	return new Date();
  }
}