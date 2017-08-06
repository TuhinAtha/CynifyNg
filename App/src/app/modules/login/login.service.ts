import { Injectable }       from '@angular/core';
 
@Injectable()
export class LoginService {
 
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getScreenMetadata(){
  	return {
  		fields:[
  			{
  				id:"username",
  				name:"username",
  				type : "text",
  			},
  			{
  				id:"password",
  				name:"password",
  				type : "password",
  			}

  		]
  	};

  }
  
}