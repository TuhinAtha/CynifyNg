import { Injectable }       from '@angular/core';
 
@Injectable()
export class DashboardService {
 	getScreenMetadata(){
 		return {
 			screenType : "detail",
 			header:{
 				"title": "User Registration Form",
 				"actions":[
 					{
 						"text":"Save",
 						"icon" : "",
 						"iconOnly": false,
 						"handler":"onSave"
 					},
 					{
 						"text":"Reset",
 						"icon" : "",
 						"iconOnly": false,
 						"handler":"onReset"
 					}
 				]
 			},
 			panels : [{
 				title : "MyPanel",
 				bindPath : "",
 				groups:[{
 					bindPath : "",
 					type : "form",
 					title : "MyForm1",
 					fields :[{
 						type : "input",
 						label : "User Name",
 						name : "username",
 						placeholder : "Enter User Name",
 						value : "username"
 					}
 					]
 				}
 				]
 			}
 			]
 		}
 	}
 	getData(){
 		return {
 			username : "Brishti"
 		}
 	}
}