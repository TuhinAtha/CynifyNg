import { Injectable }  from '@angular/core';

declare var $: any;

@Injectable()
export class Util{
	constructor(){
		
	}
	toast(type,msg){
		let template = $('<div style="position:fixed;top:1px;right:10px;z-index:1050;" class="alert alert-'+type+'" role="alert">'+msg+'</div>');
		$('body').append(template);
		setTimeout(() => {
             template.remove();
        }, 2000);
	}
	
}