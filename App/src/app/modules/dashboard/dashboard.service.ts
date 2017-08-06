import { Injectable }       from '@angular/core';
 
@Injectable()
export class DashboardService {
 	getScreenMetadata(){
 		return {
 			screenType : "detail",
 			panels : [{
 				title : "MyPanel"
 			}]
 		}
 	}
}