import { Injectable }       from '@angular/core';
import { Validators} from '@angular/forms';

@Injectable()
export class ControlUtil{
	/**
	@Params
	data: model data
	path: relative path of data
	@Returns 
	data: relative data based on the path
	*/
	getDataByPath(data: any,path:string){
		path = path.replace(/\s/g,'');// replacing all white spaces
		let pathArray = path.split(".");
		for(let item of pathArray){
			data = data[item];
		}
		return data;
	}
	/**
	@Params
	validators: Array of objects {key:string,value:any}
	@Returns
	validatorArray: Array of Validator Instances
	*/
	getValidators(validators:any){
		let validatorArray= [];
		if(validators){
			for(let validator of validators){
		      if(validator.key == 'required'){
		        validatorArray.push(Validators['required']);
		      }else{
		         validatorArray.push(Validators[validator.key](validator.value));
		      }
		    }
		}
		return validatorArray;
	}
}