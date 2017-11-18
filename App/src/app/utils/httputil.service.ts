import { Injectable }       from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpUtil{
	constructor(private http : HttpClient){
		
	}
	getRequest(url){
		let self = this;
		let promise = new Promise((resolve, reject) => {
		  self.http
			.get(url)
			.subscribe(
			// Successful responses call the first callback.
			data => {
				resolve(data);
			},
			// Errors will call this callback instead:
			err => {
			  	reject(err);
			});
		});
		return promise;
	}

	postRequest(url,data){
		let self = this;
		let promise = new Promise((resolve, reject) => {
		  self.http
			.post(url,data)
			.subscribe(
			// Successful responses call the first callback.
			data => {
				resolve(data);
			},
			// Errors will call this callback instead:
			err => {
			  	reject(err);
			});
		});
		return promise;
	}
	putRequest(url,data){
		let self = this;
		let promise = new Promise((resolve, reject) => {
		  self.http
			.put(url,data)
			.subscribe(
			// Successful responses call the first callback.
			data => {
				resolve(data);
			},
			// Errors will call this callback instead:
			err => {
			  	reject(err);
			});
		});
		return promise;
	}
}