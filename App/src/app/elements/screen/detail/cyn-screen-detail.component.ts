import {Component,Input,Output, EventEmitter} from '@angular/core'

@Component({
	selector: 'cyn-screen-detail',
	templateUrl: './cyn-screen-detail.component.html'
})
export class CynScreenDetailComponent{
	@Input()  config: any;
	@Input() data: any;
	@Output() action : any = new EventEmitter<string>();
	constructor(){
	}
	ngOnInit() {
		
  	}
  	onActionClick(handler){
  		debugger;
  		this.action.emit(handler);
  	}
}