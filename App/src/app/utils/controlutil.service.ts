import { Injectable }       from '@angular/core';

@Injectable()
export class ControlUtil{
	getDataByPath(data,path){
		path = path.replace(/\s/g,'');
		let pathArray = path.split(".");
		for(let item of pathArray){
			data = data[item];
		}
		return data;
	}
}